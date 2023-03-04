import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { PlaceholderProps } from '@sitecore-jss/sitecore-jss-react/types/components/PlaceholderCommon';

type Props = ComponentProps & PlaceholderProps;

const PartialDesignDynamicPlaceholder = (props: Props): JSX.Element => (
  <>
    <Placeholder name={props.name} rendering={props.rendering} />
  </>
);

export default PartialDesignDynamicPlaceholder;
