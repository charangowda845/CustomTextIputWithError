import React, { FunctionComponent, memo, useMemo, CSSProperties, ChangeEvent } from "react";
import "./CustomTextIputWithError.css";

type CustomTextIputWithErrorType = {
   errortext?:string;
  inputText?: string;
  inputValue?: string;
  propTop?: CSSProperties["top"];
  propPosition?: CSSProperties["position"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFlex?: CSSProperties["flex"];
  propColor1?: CSSProperties["color"];
  onInputChange?: (value: string) => void;
};

const CustomTextIputWithError: FunctionComponent<CustomTextIputWithErrorType> = memo(
  ({ errortext,
    inputText,
    inputValue,
    propTop,
    propPosition,
    propLeft,
    propWidth,
    propWidth1,
    propJustifyContent,
    propColor,
    propFontWeight,
    propFlex,
    propColor1,
    onInputChange,
  }) => {
    const property1ErrorStyle: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        position: propPosition,
        left: propLeft,
        width: propWidth,
      };
    }, [propTop, propPosition, propLeft, propWidth]);

    const frameDivStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth1,
        justifyContent: propJustifyContent,
      };
    }, [propWidth1, propJustifyContent]);

    const inputStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor,
        fontWeight: propFontWeight,
        flex: propFlex,
      };
    }, [propColor, propFontWeight, propFlex]);

    const noteStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor1,
      };
    }, [propColor1]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onInputChange) {
        onInputChange(event.target.value);
      }
    };

    return (
      <div className="property-1error" style={property1ErrorStyle}>
        <div className="input-wrapper" style={frameDivStyle}>
          <input
            type="text"
            className="input"
            style={{ ...inputStyle, outline: "none" }}
            value={inputValue}
            onChange={handleInputChange}
           
            placeholder= {inputText}
          />
        </div>
        <div className="note" style={noteStyle}>
           {errortext}
        </div>
      </div>
    );
  }
);

CustomTextIputWithError.displayName = 'CustomTextIputWithError';

export default CustomTextIputWithError;
