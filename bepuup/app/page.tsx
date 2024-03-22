import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="mt=12 mb-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-end space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow=md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Bepuup is now Public
        </p>
      </div>
    </MaxWidthWrapper>
  );
}