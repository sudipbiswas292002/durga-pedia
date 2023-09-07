import Image from 'next/image';

export default function HomeLoader() {
  return (
    <div >
      <Image src='G:/project sept/durga-pedia/public/images/loader.gif' unoptimized alt={'image'} style={{height:'100%' , width:'100%'}}/>
    </div>
  );
}