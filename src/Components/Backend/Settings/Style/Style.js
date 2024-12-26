import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  ColorPalette,
  __experimentalUnitControl as UnitControl,
  __experimentalBoxControl as BoxControl,
  SelectControl,
} from "@wordpress/components";

import { ColorsControl } from "../../../../../../bpl-tools/Components";

const colors = [
  { name: "red", color: "#f00" },
  { name: "white", color: "#fff" },
  { name: "blue", color: "#00f" },
];

const Style = ({ attributes, setAttributes }) => {
  const { desStyle, cardContainer, image, imgBorder, catButtonRedius, OrderButtonRedius, headingSize,tagName, styleType } = attributes;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Container", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label={"Container Height"}
          onChange={(val) =>
            setAttributes({ cardContainer: { ...cardContainer, height: val } })
          }
          value={cardContainer.height}
        />
        <UnitControl
          label={"Container Width"}
          onChange={(val) =>
            setAttributes({ cardContainer: { ...cardContainer, width: val } })
          }
          value={cardContainer.width}
        />
        <BoxControl
          label="Card Container Padding"
          values={cardContainer.padding}
          onChange={(value) =>
            setAttributes({
              cardContainer: { ...cardContainer, padding: value },
            })
          }
        />
        <BoxControl
          label="Card Container Margin"
          values={cardContainer.margin}
          onChange={(value) =>
            setAttributes({
              cardContainer: { ...cardContainer, margin: value },
            })
          }
        />
        <BoxControl
          label="Card Container Redius"
          values={cardContainer.borderRedius}
          onChange={(value) =>
            setAttributes({
              cardContainer: { ...cardContainer, borderRedius: value },
            })
          }
        />

        <ColorPalette
          colors={colors}
          value={attributes.catButtonColor}
          onChange={(color) =>
            setAttributes({
              cardContainer: { ...cardContainer, bgColor: color },
            })
          }
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Card Container Border", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          onChange={(vlaue) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                border: { ...cardContainer.border, width: vlaue },
              },
            })
          }
          value={cardContainer.border.width}
        />
        <SelectControl
          label={__("Select some users:")}
          value={cardContainer.border.type} // e.g: value = [ 'a', 'c' ]
          onChange={(type) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                border: { ...cardContainer.border, type: type },
              },
            })
          }
          options={[
            { value: null, label: "Select a Type", disabled: true },
            { value: "solid", label: "Solid" },
            { value: "dotted", label: "Sotted" },
            { value: "dashed", label: "Dashed" },
            { value: "double", label: "Double" },
            { value: "groove", label: "Groove" },
            { value: "ridge", label: "Ridge" },
            { value: "inset", label: "Inset" },
            { value: "outset", label: "Outset" },
            { value: "none", label: "None" },
            { value: "hidden", label: "Hidden" },
          ]}
        />

        <ColorPalette
          colors={colors}
          value={cardContainer.border.color}
          onChange={(color) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                border: { ...cardContainer.border, color: color },
              },
            })
          }
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Box Shadow", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label="OffsetX"
          onChange={(value) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                boxShadow: { ...cardContainer.boxShadow, offsetX: value },
              },
            })
          }
          value={cardContainer.boxShadow.offsetX}
        />
        <UnitControl
          label="OffsetY"
          onChange={(value) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                boxShadow: { ...cardContainer.boxShadow, offsetY: value },
              },
            })
          }
          value={cardContainer.boxShadow.offsetY}
        />
        <UnitControl
          label="Blur"
          onChange={(value) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                boxShadow: { ...cardContainer.boxShadow, blur: value },
              },
            })
          }
          value={cardContainer.boxShadow.blur}
        />
        <UnitControl
          label="Spread"
          onChange={(value) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                boxShadow: { ...cardContainer.boxShadow, spread: value },
              },
            })
          }
          value={cardContainer.boxShadow.spread}
        />

        <ColorPalette
          colors={colors}
          value={cardContainer.boxShadow.color}
          onChange={(color) =>
            setAttributes({
              cardContainer: {
                ...cardContainer,
                boxShadow: { ...cardContainer.boxShadow, color: color },
              },
            })
          }
        />
      </PanelBody>

      {/* image style start here  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Image Styles", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          label={"Image Height"}
          onChange={(val) =>
            setAttributes({ image: { ...image, height: val } })
          }
          value={image.height}
        />
        <UnitControl
          label={"Image Width"}
          onChange={(val) => setAttributes({ image: { ...image, width: val } })}
          value={image.width}
        />
      </PanelBody>

      {/* image border style start here  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Image Border", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          onChange={(vlaue) =>
            setAttributes({ imgBorder: { ...imgBorder, width: vlaue } })
          }
          value={imgBorder.width}
        />
        <SelectControl
          label={__("select border type")}
          value={imgBorder.type} 
          onChange={(type) =>
            setAttributes({ imgBorder: { ...imgBorder, type: type } })
          }
          options={[
            { value: null, label: "Select a Type", disabled: true },
            { value: "solid", label: "Solid" },
            { value: "dotted", label: "Sotted" },
            { value: "dashed", label: "Dashed" },
            { value: "double", label: "Double" },
            { value: "groove", label: "Groove" },
            { value: "ridge", label: "Ridge" },
            { value: "inset", label: "Inset" },
            { value: "outset", label: "Outset" },
            { value: "none", label: "None" },
            { value: "hidden", label: "Hidden" },
          ]}
        />

        <ColorPalette
          colors={colors}
          value={imgBorder.color}
          onChange={(color) =>
            setAttributes({ imgBorder: { ...imgBorder, color: color } })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Des Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorsControl
          value={desStyle}
          onChange={(v) => setAttributes({ desStyle: v })}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Category Button Style", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
          colors={colors}
          value={attributes.catButtonColor}
          onChange={(color) => setAttributes({ catButtonColor: color })}
        />
        <ColorPalette
          colors={colors}
          value={attributes.catButtonTextColor}
          onChange={(color) => setAttributes({ catButtonTextColor: color })}
        />

<UnitControl
          label={"Catagory Button Redius"}
          onChange={(val) =>
            setAttributes({ catButtonRedius:val })
          }
          value={catButtonRedius}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Heading Color or styles", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
          colors={colors}
          value={attributes.headingColor}
          onChange={(color) => setAttributes({ headingColor: color })}
        />
        <UnitControl
        label="Font Size"
          onChange={(value) => setAttributes({ headingSize: value })}
          value={headingSize}
        />
        <SelectControl
	label="Select A Tag"
	onChange={ ( tag ) => setAttributes({tagName:tag}) }
  value={tagName}
	options={ [
		{ value: null, label: 'Select a tag', disabled: true },
		{ value: 'h1', label: 'H1' },
		{ value: 'h2', label: 'H2' },
		{ value: 'h3', label: 'H3' },
		{ value: 'h4', label: 'H4' },
		{ value: 'h5', label: 'H5' },
		{ value: 'h6', label: 'H6' },
	] }
/>
        <SelectControl
	label="Select Bold Type"
	onChange={ ( type) => setAttributes({styleType:type}) }
  value={styleType}
	options={ [
		{ value: null, label: 'Select One', disabled: true },
		{ value: 'normal', label: 'Normal' },
		{ value: 'bold', label: 'Bold' },
		{ value: 'bolder', label: 'Bolder' },
		{ value: 'lighter', label: 'Lighter' },
	] }
/>
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Order Button Styles", "b-blocks")}
        initialOpen={false}
      >
        <ColorPalette
          colors={colors}
          value={attributes.orderBtnColor}
          onChange={(color) => setAttributes({ orderBtnColor: color })}
        />
        
        <ColorPalette
          colors={colors}
          value={attributes.orderBtnTextColor}
          onChange={(color) => setAttributes({ orderBtnTextColor: color })}
        />
        <UnitControl
        label="Border Redius"
          onChange={(value) => setAttributes({ OrderButtonRedius: value })}
          value={OrderButtonRedius}
        />
      </PanelBody>
    </>
  );
};

export default Style;
