import Link from "next/link";
import { useRouter } from "next/router";
interface ActiveLinkProps {
  href: string;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  return (
    <Link href={href} replace>
      <a style={style}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
