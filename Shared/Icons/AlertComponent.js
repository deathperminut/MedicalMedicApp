import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function AlertComponent(props) {
  return (
    <Svg
      data-name="Grupo 1848"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.886 21.902"
      {...props}
    >
      <Defs>
        <ClipPath id="a">
          <Path
            data-name="Rect\xE1ngulo 99"
            fill="#685CBF"
            d="M0 0H21.886V21.902H0z"
          />
        </ClipPath>
      </Defs>
      <G data-name="Grupo 1847" clipPath="url(#a)" fill="#685CBF">
        <Path
          data-name="Trazado 433"
          d="M2.522 11.079v-.627c.011-1.128-.04-2.261.046-3.383a7.3 7.3 0 013.391-5.727 7.383 7.383 0 014.929-1.2.846.846 0 11-.12 1.678 5.531 5.531 0 00-3.074.48 5.741 5.741 0 00-3.478 5.219c-.05 1.119-.011 2.241-.012 3.362 0 .045.006.09.012.167h13.006a2.944 2.944 0 01.143 5.885c-.36.01-.721 0-1.082 0H2.995a2.938 2.938 0 01-.731-5.8l.257-.061m7.57 4.153h7.161a1.24 1.24 0 10-.052-2.478H2.902a1.238 1.238 0 00.052 2.476h7.138"
          transform="translate(0 -.094)"
        />
        <Path
          data-name="Trazado 434"
          d="M196.451 0a5.049 5.049 0 11-4.893 5.231A5.043 5.043 0 01196.451 0m3.506 5.062a3.353 3.353 0 10-3.341 3.34 3.356 3.356 0 003.341-3.34"
          transform="translate(-179.765)"
        />
        <Path
          data-name="Trazado 435"
          d="M100.016 304.6a5.053 5.053 0 01-3.987-1.962.838.838 0 01.087-1.212.847.847 0 011.221.166 3.365 3.365 0 005.358 0 .839.839 0 111.3 1.055 5.049 5.049 0 01-3.978 1.948"
          transform="translate(-89.915 -282.699)"
        />
      </G>
    </Svg>
  )
}

export default AlertComponent