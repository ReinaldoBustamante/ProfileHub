import { Form } from '@/components/Form';
import Image from 'next/image'
export default function oHme() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-svh md:h-screen gap-2">
      <Image
        src="/github.svg"
        alt="Description"
        width={200}
        height={200}
        priority
      />
      <h1 className="text-3xl font-semibold text-[#175B96]">ProfileHub</h1>
      <Form />
    </div>
  );
}
