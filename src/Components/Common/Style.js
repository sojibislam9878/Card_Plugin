import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const {desStyle} = attributes;

	const mainSl = `#${id}`;
	const cardContainer =` ${mainSl} .cardContainer`;
	const desSl =` ${cardContainer} .description`;
	const heading= `${cardContainer} .heading`
	const orderBtn = `${cardContainer} .orderBtn`;




	return <style dangerouslySetInnerHTML={{
		__html: `
		${orderBtn}{
		background-color: ${attributes.orderBtnColor};
		color: ${attributes.orderBtnTextColor};
		border-radius: ${attributes.OrderButtonRedius};
		}

		${heading}{
		color: ${attributes.headingColor};
		font-size: ${attributes.headingSize};
		font-weight: ${attributes.styleType}
		
		}

		${desSl}{
			${getColorsCSS(desStyle)}

		}
			

	`}} />;
}
export default Style;