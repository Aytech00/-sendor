import React from 'react'

import img2 from "../../assets/3.png";

export default function Narative() {
  return (
    <section className="container mt-20 text-white  flex justify-center ">
      <div className="">
        <div className="mb-14 text-center md:mb-14">
          <h1 className=" text-3xl md:text-5xl font-bold mb-10 md:mb-20 underline">
            HOW TO BUY
          </h1>
          <p className="mb-5 text-sm md:text-xl">
            GWd5e9hbMf5DrpLR8ZhP1gA6CupYgi9mm6D4TLM8wX25
          </p>

          <a
            href="https://dexscreener.com/solana/GWd5e9hbMf5DrpLR8ZhP1gA6CupYgi9mm6D4TLM8wX25"
            className="underline font-semiboldm italic text-white text-lg"
          >
            Copy here...
          </a>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
          <div className=" w-full md:w-[700px] text-center md:text-left ">
            <div className="mb-4 md:mb-10">
              <h1 className="font-semibold mb-5 text-2xl">CREATE WALLET</h1>
              <p className="mb-5 leading-loose">
                Because serious investors look for a strong narrative before
                buying in, right? ​ Well, here you go! ​ Brett is pepe's college
                roommate and best friend. Once humid, summer morning and
                desperate for some relief from the hot sun, Brett made his way
                to the public pool to take a dip.
              </p>
            </div>
            <div className="mb-4 md:mb-10">
              <h1 className="font-semibold mb-3 text-2xl">GET SOME SOL</h1>
              <p className="mb-5 leading-loose">
                Have SOL in your wallet to switch to $SENDOR. If you don’t have
                any SOL, you can buy directly on Phantom, transfer from another
                wallet, or buy on another exchange and send it to your wallet.
              </p>
            </div>

            <div className="mb-4 md:mb-10">
              <h1 className="font-semibold mb-3 text-2xl">Go to Raydium</h1>
              <p className="mb-5 leading-loose">
                Connect to Raydium. Go to Raydium in google chrome or on the
                browser inside your Phantom app. Connect your wallet. Paste the
                $SENDOR token address into Raydium, select $SENDOR, and confirm.
                When Phantom prompts you for a wallet signature, sign.
              </p>
            </div>

            <div className="">
              <h1 className="font-semibold mb-3 text-2xl">$SENDOR</h1>
              <p className="mb-5 leading-loose">
                Switch SOL for $SENDOR. We have Zero taxes so you don’t need to
                worry about buying with a specific slippage, although you may
              </p>
            </div>
          </div>
          <div className="mb-5 md:mb-0 ">
            <img
              className="w-[300px] md:h-full md:w-[500px]"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
