import { __ } from "@wordpress/i18n";
import {
  __experimentalInputControl as InputControl,
  __experimentalNumberControl as NumberControl,
  FormTokenField,
  IconButton,
  __experimentalUnitControl as UnitControl,
 
} from "@wordpress/components";
import { PanelBody, SelectControl } from "@wordpress/components";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { MediaUpload } from "@wordpress/block-editor";

const continents = [
  "Africa",
  "America",
  "Antarctica",
  "Asia",
  "Europe",
  "Oceania",
];

const General = ({ attributes, setAttributes }) => {
  const { purposeType } = attributes;
  const { cardContainer } = attributes;
  

 

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Heading and descriptions", "b-blocks")}
        initialOpen={false}
      >
        {/* <SelectControl
        label={__('Purpose', 'b-blocks')}
        labelPosition='left'
        value={purposeType}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
      /> */}
        <InputControl
          label={"Heading"}
          value={attributes.heading}
          onChange={(val) => setAttributes({ heading: val })}
        />
        <InputControl
          label={"Description"}
          value={attributes.description}
          onChange={(val) => setAttributes({ description: val })}
        />
        <InputControl
          label={"Button Text"}
          value={attributes.buttonText}
          onChange={(val) => setAttributes({ buttonText: val })}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Price and numbers", "b-blocks")}
        initialOpen={false}
      >
        <NumberControl
          label={"price"}
          onChange={(val) => setAttributes({ price: val })}
          value={attributes.price}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Categorys", "b-blocks")}
        initialOpen={false}
      >
        <FormTokenField
          value={attributes.categorys}
          suggestions={continents}
          onChange={(tokens) => setAttributes({ categorys: tokens })}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Upload media", "b-blocks")}
        initialOpen={false}
      >
        <MediaUpload
          onSelect={(media) => setAttributes({ photoUrl: media.url })}
          type="image"
          value={attributes.photoUrl}
          render={({ open }) => (
            <IconButton
              onClick={open}
              icon="upload"
              className="editor-media-placeholder_button is-button is-default is-large"
            >
              Upload a Photo
            </IconButton>
          )}
        />
      </PanelBody>
    </>
  );
};

export default General;
