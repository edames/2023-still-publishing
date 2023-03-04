import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TitleProps = ComponentProps & {
  fields: {
    title: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Title = ({ fields }: TitleProps): JSX.Element => (
  <div className="titleBlock">
    <Text tag="h2" className="contentTitle" field={fields.title} />
  </div>
);

export default withDatasourceCheck()<TitleProps>(Title);
