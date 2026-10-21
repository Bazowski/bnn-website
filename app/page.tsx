import { allPosts } from "contentlayer/generated";
import { Card } from "@/components/Card/Card";
import { Hero } from "@/components/Hero/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "home | Minimalist",
  description:
    "Minimalist is template for blog built with nextjs, shadcn ui and tailwind css.",
};

export default function Page() {
    return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center w-full">
          
          {/* 1. ЛОГОНЫ ХЭСЭГ (ЯГ ГОЛДОГ, ЗӨВ БҮТЭЦТЭЙ) */}
          <div className="flex justify-center items-center w-full mb-6">
            <img 
              src="/bnn-logo.png" 
              alt="" 
              className="h-32 w-32 md:h-48 md:w-48 object-contain drop-shadow-[0_0_25px_rgba(99,102,241,0.3)] block" 
            />
          </div>

          {/* 2. НАМЫН НЭР (ТАГ-ААС ГАДНА, ЦЭВЭРХЭН) */}
          <h2 className="mb-4 text-pretty text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-6xl mx-auto">
            БҮГД НАЙРАМДАХ НАМ
          </h2>
          
          {/* 3. УРИА ТАЙЛБАР */}
          <p className="mb-10 text-muted-foreground md:text-base lg:max-w-2xl lg:text-xl mx-auto">
            Бүтээлч шинэлэг иргэнтэй, хүчирхэг эдийн засагтай, хүчтэй төртэй Монгол улсыг байгуулахын төлөө шаргуу тэмцэх нь намын эрхэм зорилго болно.
          </p>

        </div>
      </div>

      <Hero />
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {allPosts.map((item, index) => {
          // remove the fisrt post
          if (index !== 0) {
            return <Card key={item.id} item={item} />;
          }
        })}
      </div>
    </section>
  );
}
