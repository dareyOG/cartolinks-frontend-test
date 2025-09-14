import Image from 'next/image';

function HeaderLogo() {
  return (
    <Image src="/globe.svg" alt="Cartolinks Logo" width={20} height={20} />
  );
}

export default HeaderLogo;
