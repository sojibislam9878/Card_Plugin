import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { Flex, FlexBlock, FlexItem } from "@wordpress/components";
import { RichText, useBlockProps } from "@wordpress/block-editor";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;
  const { alignment, cardContainer, image, imgBorder, catButtonRedius ,tagName} = attributes;
  
 
  

  return (
    <div {...useBlockProps()}>
      <Settings {...{ attributes, setAttributes }} />

      <Style attributes={attributes} id={`block-${clientId}`} />

      <div className="cardPlugin" style={{ justifyContent: alignment }}>
        <div
          className="cardContainer"
          style={{
            height: cardContainer?.height,
            width: cardContainer.width,
            background: cardContainer.bgColor,
            paddingTop: cardContainer.padding.top,
            paddingBottom: cardContainer.padding.bottom,
            paddingLeft: cardContainer.padding.left,
            paddingRight: cardContainer.padding.right,
            marginTop: cardContainer.margin.top,
            marginBottom: cardContainer.margin.bottom,
            marginLeft: cardContainer.margin.left,
            marginRight: cardContainer.margin.right,
            borderTopLeftRadius: cardContainer.borderRedius.top,
            borderTopRightRadius: cardContainer.borderRedius.right,
            borderBottomLeftRadius: cardContainer.borderRedius.left,
            borderBottomRightRadius: cardContainer.borderRedius.bottom,
            boxShadow: `${cardContainer.boxShadow.offsetX} ${cardContainer.boxShadow.offsetY} ${cardContainer.boxShadow.blur} ${cardContainer.boxShadow.spread}  ${cardContainer.boxShadow.color}  ` ,
            border:`${cardContainer.border.width} ${cardContainer.border.type} ${cardContainer.border.color} `
          }}
        >
          <img className="img" style={{height:image.height, width:image.width , border:`${imgBorder.width} ${imgBorder.type} ${imgBorder.color}`}}  src={attributes.photoUrl} />
          <RichText
            tagName={tagName}
            placeholder="Add Your Title"
            value={attributes.heading}
            onChange={(value) => setAttributes({ heading: value })}
            className="rich-text-placeholder heading"
          />

          <RichText
            tagName="p"
            placeholder="Write your description here..."
            value={attributes.description}
            onChange={(value) => setAttributes({ description: value })}
            className="rich-text-placeholder para description"
          />
          {/* button div  */}
          <div className="buttonContainer">
            {attributes.categorys.map((cate, index) => (
              <button
                style={{
                  backgroundColor: attributes.catButtonColor,
                  color: attributes.catButtonTextColor,
                  borderRadius:catButtonRedius
                }}
                className="categoryBtn"
                key={index}
              >
                {cate}
              </button>
            ))}{" "}
          </div>
          <Flex>
            <FlexBlock>
              <RichText
                tagName="p"
                type="number"
                placeholder="Add price here..."
                value={`$${attributes.price}`}
                onChange={(value) => {
                  const numValue = value.replace(/\$/g, "");
                  setAttributes({ price: numValue });
                }}
                className="rich-text-placeholder price"
              />
            </FlexBlock>
            <FlexItem>
              <button className="orderBtn">{attributes.buttonText}</button>
            </FlexItem>
          </Flex>
        </div>
      </div>
    </div>
  );
};
export default Edit;
