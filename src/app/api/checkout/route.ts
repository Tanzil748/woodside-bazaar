import { NextResponse, NextRequest } from "next/server";
import { ProductType } from "../../../../type";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const data = await request.json();
    const { items } = await data;

    const extractingItems = await items.map((item: ProductType) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [item.img],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
    });

    return NextResponse.json({
      message: "Connection worked",
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// data => email && array of items => category, img, name, price, quantity, store
