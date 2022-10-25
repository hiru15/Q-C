import { Image } from '@components/Common/Image/index';
import LinkElement from '@components/Common/Link/index';
import { memo } from "react";
interface ILogo {
  width: number,
  white?: boolean,
}
const Logo = ({
  width
}: ILogo ) => {

  return (
    <LinkElement
        href={{
            pathname: `/`
          }}
        >
        <div className="header__logo" style={{ maxWidth: '140px' }}>
          <Image
            alt="icon.png"
            src={'/logo/QC-Logo.png'}
            layout="fixed"
            width={width}
            aspectRatio="4:1"
            priority
            className="img-fluid"
          />
        </div>
      </LinkElement>
  );
}
export default memo(Logo);
