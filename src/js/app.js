/**
 * Car & Road
 */
(() => {
  /**
   * This if statement avoids executing code bellow in Drupal admin and user menus
   */
  if (window.location.href.indexOf("/admin/") !== -1 || window.location.href.indexOf("/user/") !== -1) return;

  /**
   * Raw SVG
   */
  // Road
  const rawRoadDesktop = (id, guide) => `
  <svg id="${id}" x="0px" y="0px" viewBox="0 0 2420 1325.63">
    <g id="${id}_lines">
      <path id="${guide}_bg--black" style="fill:none;stroke:#000000;stroke-width:50;" d="M2261.03,1259.36H346.21v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H339.21l-0.01,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43h1920.81l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43l-1921.81-0.9l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H337.21l1,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21"/>
      <path id="${guide}_mg--yellow" style="fill:none;stroke:#FFD500;stroke-width:46;" d="M2261.03,1259.36H346.21v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H339.21l-0.01,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43h1920.81l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43l-1921.81-0.9l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H337.21l1,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21"/>
      <path id="${guide}_fg--black" style="fill:none;stroke:#000000;stroke-width:42;" d="M2261.03,1259.36H346.21v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H339.21l-0.01,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43h1920.81l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43l-1921.81-0.9l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H337.21l1,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21"/>
      <path id="${guide}_dashed" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-dasharray:20;" d="M2261.03,1259.36H346.21v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H339.21l-0.01,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43h1920.81l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43l-1921.81-0.9l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H337.21l1,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1919.81v0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H339.21"/>
    </g>
    <g id="${id}_texts">
      <text transform="matrix(1 0 0 1 73.7411 274.1673)" style="font-family:'Roboto-Regular'; font-size:50px;">2010</text>
      <text transform="matrix(1 0 0 1 73.7411 373.1676)" style="font-family:'Roboto-Regular'; font-size:50px;">2011</text>
      <text transform="matrix(1 0 0 1 73.7411 471.1676)" style="font-family:'Roboto-Regular'; font-size:50px;">2012</text>
      <text transform="matrix(1 0 0 1 73.7411 569.1675)" style="font-family:'Roboto-Regular'; font-size:50px;">2013</text>
      <text transform="matrix(1 0 0 1 73.7411 667.1675)" style="font-family:'Roboto-Regular'; font-size:50px;">2014</text>
      <text transform="matrix(1 0 0 1 73.7411 766.1675)" style="font-family:'Roboto-Regular'; font-size:50px;">2015</text>
      <text transform="matrix(1 0 0 1 73.7411 863.1675)" style="font-family:'Roboto-Regular'; font-size:50px;">2016</text>
      <text transform="matrix(1 0 0 1 73.7411 962.1675)" style="font-family:'Roboto-Regular'; font-size:50px;">2017</text>
      <text transform="matrix(1 0 0 1 73.7411 1060.1676)" style="font-family:'Roboto-Regular'; font-size:50px;">2018</text>
      <text transform="matrix(1 0 0 1 73.741 1158.1676)" style="font-family:'Roboto-Regular'; font-size:50px;">2019</text>
      <text transform="matrix(1 0 0 1 73.7408 1256.1678)" style="font-family:'Roboto-Regular'; font-size:50px;">2020</text>
    </g>

    ${custom(
      {
        width: 150,
        height: 150,
        viewBox: "1175 1325.63 2420 1325.63",
      },
      {
        width: 128,
        height: 128,
      }
    )}
  </svg>`;

  const rawRoadTablet = (id, guide) => `
  <svg id="${id}" viewBox="0 0 1680 2420">
    <g id="${id}_lines">
      <path id="${guide}_bg--black" style="fill:none;stroke:#000000;stroke-width:50;;" d="M1514.37,2320.31H433.03l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1079.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.03l0.13,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0
        c77.45,0,78-37.92,78-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15l-1,0
        c-77.45,0-78-37.92-78-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H435.15"/>
      <path id="${guide}_mg--yellow" style="fill:none;stroke:#FFD500;stroke-width:46;;" d="M1514.37,2320.31H433.03l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1079.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.03l0.13,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0
        c77.45,0,78-37.92,78-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15l-1,0
        c-77.45,0-78-37.92-78-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H435.15"/>
      <path id="${guide}_fg--black" style="fill:none;stroke:#000000;stroke-width:42;;" d="M1514.37,2320.31H433.03l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1079.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.03l0.13,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0
        c77.45,0,78-37.92,78-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15l-1,0
        c-77.45,0-78-37.92-78-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H435.15"/>
      <path id="${guide}_dashed" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-dasharray:20;" d="M1514.37,2320.31H433.03l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43h1079.81l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.03l0.13,0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2v0c77.45,0,79-37.92,79-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0
        c77.45,0,78-37.92,78-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H434.15l-1,0
        c-77.45,0-78-37.92-78-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H434.15v0c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0
        c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0c-77.45,0-79-37.92-79-51.09l0,0
        c0-12.52,2.78-50.43,80.23-50.43H1516.2l-1,0c77.45,0,79-37.92,79-51.09l0,0c0-12.52-2.78-50.43-80.23-50.43H433.15l1,0
        c-77.45,0-79-37.92-79-51.09l0,0c0-12.52,2.78-50.43,80.23-50.43H1515.2l1,0c77.45,0,78-37.92,78-51.09l0,0
        c0-12.52-2.78-50.43-80.23-50.43H435.15"/>
    </g>
    <g id="${id}_texts">
      <text transform="matrix(1 0 0 1 85.8016 308.9213)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2010</text>
      <text transform="matrix(1 0 0 1 85.8016 409.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2010</text>
      <text transform="matrix(1 0 0 1 85.8016 509.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2011</text>
      <text transform="matrix(1 0 0 1 85.8016 609.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2011</text>
      <text transform="matrix(1 0 0 1 85.8016 709.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2012</text>
      <text transform="matrix(1 0 0 1 85.8016 810.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2012</text>
      <text transform="matrix(1 0 0 1 85.8016 910.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2013</text>
      <text transform="matrix(1 0 0 1 85.8016 1010.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2013</text>
      <text transform="matrix(1 0 0 1 85.8016 1111.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2014</text>
      <text transform="matrix(1 0 0 1 85.8015 1211.9214)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2014</text>
      <text transform="matrix(1 0 0 1 85.8013 1311.9209)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2015</text>
      <text transform="matrix(1 0 0 1 85.8011 1412.9216)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2015</text>
      <text transform="matrix(1 0 0 1 85.8011 1512.9216)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2016</text>
      <text transform="matrix(1 0 0 1 85.8011 1612.9216)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2016</text>
      <text transform="matrix(1 0 0 1 85.8011 1712.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2017</text>
      <text transform="matrix(1 0 0 1 85.8011 1813.9215)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2017</text>
      <text transform="matrix(1 0 0 1 85.8011 1913.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2018</text>
      <text transform="matrix(1 0 0 1 85.8011 2014.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2018</text>
      <text transform="matrix(1 0 0 1 85.8011 2114.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2019</text>
      <text transform="matrix(1 0 0 1 85.8015 2214.9211)" style="font-family:'Roboto-Regular'; font-size:50px;">S2 2019</text>
      <text transform="matrix(1 0 0 1 85.8015 2315.9209)" style="font-family:'Roboto-Regular'; font-size:50px;">S1 2020</text>
    </g>

    ${custom(
      {
        width: 128,
        height: 128,
        viewBox: "0 0 1680 2420",
      },
      {
        width: 128,
        height: 128,
      }
    )}
  </svg>`;

  const rawRoadMobile = (id, guide) => `
  <svg id="${id}" viewBox="0 0 480 4925.56">
    <g id="${id}_lines">
      <line id="${guide}_bg--black" style="fill:none;stroke:#000000;stroke-width:50;" x1="79" y1="4880.78" x2="79" y2="44.78"/>
      <line id="${guide}_mg--yellow" style="fill:none;stroke:#FFD500;stroke-width:46;" x1="79" y1="4880.78" x2="79" y2="44.78"/>
      <line id="${guide}_fg--black" style="fill:none;stroke:#000000;stroke-width:42;" x1="79" y1="4880.78" x2="79" y2="44.78"/>
      <line id="${guide}_dashed" style="fill:none;stroke:#FFFFFF;stroke-width:4;stroke-dasharray:20;" x1="79" y1="4880.78" x2="79" y2="44.78"/>
    </g>
    <g id="${id}_texts">
      <text transform="matrix(1 0 0 1 258.3344 83.978)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2010</text>
      <text transform="matrix(1 0 0 1 258.3343 122.2387)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2010</text>
      <text transform="matrix(1 0 0 1 258.3343 160.1859)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2010</text>
      <text transform="matrix(1 0 0 1 258.3341 198.4466)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2010</text>
      <text transform="matrix(1 0 0 1 258.334 236.9962)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2010</text>
      <text transform="matrix(1 0 0 1 258.3344 275.2569)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2010</text>
      <text transform="matrix(1 0 0 1 257.9012 313.4769)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2010</text>
      <text transform="matrix(1 0 0 1 257.9011 351.7376)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2010</text>
      <text transform="matrix(1 0 0 1 257.9011 389.6848)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2010</text>
      <text transform="matrix(1 0 0 1 257.9009 427.9455)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2010</text>
      <text transform="matrix(1 0 0 1 257.9009 466.4951)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2010</text>
      <text transform="matrix(1 0 0 1 257.9012 504.7558)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2010</text>
      <text transform="matrix(1 0 0 1 258.1178 544.0417)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2011</text>
      <text transform="matrix(1 0 0 1 258.1177 582.3024)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2011</text>
      <text transform="matrix(1 0 0 1 258.1177 620.2496)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2011</text>
      <text transform="matrix(1 0 0 1 258.1175 658.5103)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2011</text>
      <text transform="matrix(1 0 0 1 258.1174 697.0599)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2011</text>
      <text transform="matrix(1 0 0 1 258.1177 735.3206)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2011</text>
      <text transform="matrix(1 0 0 1 257.6846 773.5406)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2011</text>
      <text transform="matrix(1 0 0 1 257.6845 811.8013)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2011</text>
      <text transform="matrix(1 0 0 1 257.6845 849.7485)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2011</text>
      <text transform="matrix(1 0 0 1 257.6843 888.0092)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2011</text>
      <text transform="matrix(1 0 0 1 257.6843 926.5588)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2011</text>
      <text transform="matrix(1 0 0 1 257.6846 964.8195)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2011</text>
      <text transform="matrix(1 0 0 1 258.6548 1004.6668)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2012</text>
      <text transform="matrix(1 0 0 1 258.6547 1042.9275)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2012</text>
      <text transform="matrix(1 0 0 1 258.6547 1080.8748)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2012</text>
      <text transform="matrix(1 0 0 1 258.6545 1119.1355)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2012</text>
      <text transform="matrix(1 0 0 1 258.6544 1157.6851)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2012</text>
      <text transform="matrix(1 0 0 1 258.6547 1195.9458)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2012</text>
      <text transform="matrix(1 0 0 1 258.2216 1234.1658)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2012</text>
      <text transform="matrix(1 0 0 1 258.2215 1272.4265)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2012</text>
      <text transform="matrix(1 0 0 1 258.2215 1310.3738)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2012</text>
      <text transform="matrix(1 0 0 1 258.2213 1348.6344)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2012</text>
      <text transform="matrix(1 0 0 1 258.2213 1387.1841)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2012</text>
      <text transform="matrix(1 0 0 1 258.2216 1425.4447)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2012</text>
      <text transform="matrix(1 0 0 1 258.4382 1464.7306)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2013</text>
      <text transform="matrix(1 0 0 1 258.438 1502.9912)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2013</text>
      <text transform="matrix(1 0 0 1 258.438 1540.9385)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2013</text>
      <text transform="matrix(1 0 0 1 258.4379 1579.1992)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2013</text>
      <text transform="matrix(1 0 0 1 258.4378 1617.7488)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2013</text>
      <text transform="matrix(1 0 0 1 258.4381 1656.0095)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2013</text>
      <text transform="matrix(1 0 0 1 258.005 1694.2295)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2013</text>
      <text transform="matrix(1 0 0 1 258.0049 1732.4902)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2013</text>
      <text transform="matrix(1 0 0 1 258.0049 1770.4375)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2013</text>
      <text transform="matrix(1 0 0 1 258.0047 1808.6981)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2013</text>
      <text transform="matrix(1 0 0 1 258.0046 1847.2478)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2013</text>
      <text transform="matrix(1 0 0 1 258.0049 1885.5084)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2013</text>
      <text transform="matrix(1 0 0 1 258.1232 1925.894)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2014</text>
      <text transform="matrix(1 0 0 1 258.1231 1964.1548)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2014</text>
      <text transform="matrix(1 0 0 1 258.1231 2002.1021)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2014</text>
      <text transform="matrix(1 0 0 1 258.1229 2040.3627)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2014</text>
      <text transform="matrix(1 0 0 1 258.1229 2078.9124)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2014</text>
      <text transform="matrix(1 0 0 1 258.1232 2117.1729)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2014</text>
      <text transform="matrix(1 0 0 1 257.6901 2155.3928)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2014</text>
      <text transform="matrix(1 0 0 1 257.6899 2193.6536)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2014</text>
      <text transform="matrix(1 0 0 1 257.6899 2231.6008)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2014</text>
      <text transform="matrix(1 0 0 1 257.6898 2269.8616)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2014</text>
      <text transform="matrix(1 0 0 1 257.6897 2308.4111)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2014</text>
      <text transform="matrix(1 0 0 1 257.69 2346.6719)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2014</text>
      <text transform="matrix(1 0 0 1 257.9066 2385.9578)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2015</text>
      <text transform="matrix(1 0 0 1 257.9065 2424.2185)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2015</text>
      <text transform="matrix(1 0 0 1 257.9065 2462.1658)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2015</text>
      <text transform="matrix(1 0 0 1 257.9063 2500.4263)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2015</text>
      <text transform="matrix(1 0 0 1 257.9063 2538.9761)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2015</text>
      <text transform="matrix(1 0 0 1 257.9066 2577.2366)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2015</text>
      <text transform="matrix(1 0 0 1 257.4734 2615.4568)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2015</text>
      <text transform="matrix(1 0 0 1 257.4733 2653.7173)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2015</text>
      <text transform="matrix(1 0 0 1 257.4733 2691.6646)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2015</text>
      <text transform="matrix(1 0 0 1 257.4731 2729.9253)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2015</text>
      <text transform="matrix(1 0 0 1 257.4731 2768.4749)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2015</text>
      <text transform="matrix(1 0 0 1 257.4734 2806.7356)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2015</text>
      <text transform="matrix(1 0 0 1 258.4436 2846.583)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2016</text>
      <text transform="matrix(1 0 0 1 258.4435 2884.8435)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2016</text>
      <text transform="matrix(1 0 0 1 258.4435 2922.7908)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2016</text>
      <text transform="matrix(1 0 0 1 258.4433 2961.0515)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2016</text>
      <text transform="matrix(1 0 0 1 258.4432 2999.6011)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2016</text>
      <text transform="matrix(1 0 0 1 258.4435 3037.8618)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2016</text>
      <text transform="matrix(1 0 0 1 258.0104 3076.0818)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2016</text>
      <text transform="matrix(1 0 0 1 258.0103 3114.3425)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2016</text>
      <text transform="matrix(1 0 0 1 258.0103 3152.2898)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2016</text>
      <text transform="matrix(1 0 0 1 258.0101 3190.5505)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2016</text>
      <text transform="matrix(1 0 0 1 258.0101 3229.1001)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2016</text>
      <text transform="matrix(1 0 0 1 258.0104 3267.3608)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2016</text>
      <text transform="matrix(1 0 0 1 258.227 3306.6467)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2017</text>
      <text transform="matrix(1 0 0 1 258.2269 3344.9072)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2017</text>
      <text transform="matrix(1 0 0 1 258.2269 3382.8545)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2017</text>
      <text transform="matrix(1 0 0 1 258.2267 3421.1152)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2017</text>
      <text transform="matrix(1 0 0 1 258.2266 3459.6648)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2017</text>
      <text transform="matrix(1 0 0 1 258.2269 3497.9255)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2017</text>
      <text transform="matrix(1 0 0 1 257.7938 3536.1455)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2017</text>
      <text transform="matrix(1 0 0 1 257.7937 3574.4063)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2017</text>
      <text transform="matrix(1 0 0 1 257.7937 3612.3535)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2017</text>
      <text transform="matrix(1 0 0 1 257.7935 3650.6143)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2017</text>
      <text transform="matrix(1 0 0 1 257.7935 3689.1638)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2017</text>
      <text transform="matrix(1 0 0 1 257.7938 3727.4246)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2017</text>
      <text transform="matrix(1 0 0 1 257.7232 3769.1511)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2018</text>
      <text transform="matrix(1 0 0 1 257.7231 3807.4119)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2018</text>
      <text transform="matrix(1 0 0 1 257.7231 3845.3591)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2018</text>
      <text transform="matrix(1 0 0 1 257.7229 3883.6199)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2018</text>
      <text transform="matrix(1 0 0 1 257.7228 3922.1694)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2018</text>
      <text transform="matrix(1 0 0 1 257.7231 3960.4302)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2018</text>
      <text transform="matrix(1 0 0 1 257.29 3998.6501)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2018</text>
      <text transform="matrix(1 0 0 1 257.2899 4036.9109)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2018</text>
      <text transform="matrix(1 0 0 1 257.2899 4074.8582)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2018</text>
      <text transform="matrix(1 0 0 1 257.2897 4113.1187)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2018</text>
      <text transform="matrix(1 0 0 1 257.2897 4151.6685)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2018</text>
      <text transform="matrix(1 0 0 1 257.29 4189.9287)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2018</text>
      <text transform="matrix(1 0 0 1 257.5066 4229.2148)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2019</text>
      <text transform="matrix(1 0 0 1 257.5065 4267.4756)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2019</text>
      <text transform="matrix(1 0 0 1 257.5065 4305.4229)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2019</text>
      <text transform="matrix(1 0 0 1 257.5063 4343.6836)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2019</text>
      <text transform="matrix(1 0 0 1 257.5062 4382.2329)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2019</text>
      <text transform="matrix(1 0 0 1 257.5065 4420.4937)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2019</text>
      <text transform="matrix(1 0 0 1 257.0734 4458.7139)" style="font-family:'Roboto-Regular'; font-size:30px;">07.2019</text>
      <text transform="matrix(1 0 0 1 257.0733 4496.9746)" style="font-family:'Roboto-Regular'; font-size:30px;">08.2019</text>
      <text transform="matrix(1 0 0 1 257.0733 4534.9219)" style="font-family:'Roboto-Regular'; font-size:30px;">09.2019</text>
      <text transform="matrix(1 0 0 1 257.0731 4573.1821)" style="font-family:'Roboto-Regular'; font-size:30px;">10.2019</text>
      <text transform="matrix(1 0 0 1 257.0731 4611.7319)" style="font-family:'Roboto-Regular'; font-size:30px;">11.2019</text>
      <text transform="matrix(1 0 0 1 257.0734 4649.9927)" style="font-family:'Roboto-Regular'; font-size:30px;">12.2019</text>
      <text transform="matrix(1 0 0 1 258.0436 4689.8403)" style="font-family:'Roboto-Regular'; font-size:30px;">01.2020</text>
      <text transform="matrix(1 0 0 1 258.0435 4728.1011)" style="font-family:'Roboto-Regular'; font-size:30px;">02.2020</text>
      <text transform="matrix(1 0 0 1 258.0435 4766.0483)" style="font-family:'Roboto-Regular'; font-size:30px;">03.2020</text>
      <text transform="matrix(1 0 0 1 258.0433 4804.3086)" style="font-family:'Roboto-Regular'; font-size:30px;">04.2020</text>
      <text transform="matrix(1 0 0 1 258.0432 4842.8584)" style="font-family:'Roboto-Regular'; font-size:30px;">05.2020</text>
      <text transform="matrix(1 0 0 1 258.0435 4881.1187)" style="font-family:'Roboto-Regular'; font-size:30px;">06.2020</text>
    </g>

    ${custom(
      {
        width: 150,
        height: 150,
        viewBox: "0 0 480 4925.56",
      },
      {
        width: 48,
        height: 48,
      }
    )}
  </svg>`;

  // Pins
  const rawPinDesktopTablet = (pin) => `
  <symbol id="symbol-pin" width="${pin.width}" height="${pin.height}" viewBox="${pin.viewBox}">
    <circle style="fill:#004494;" cx="1500" cy="1720" r="325"/>
    <polygon style="fill:#004494;" points="1500,2445 1598.68,2005 1401.32,2005 "/>
  </symbol>`;

  const rawPinMobile = (pin) => `
  <symbol id="symbol-pin" width="${pin.width}" height="${pin.height}" viewBox="${pin.viewBox}">
    <circle style="fill:#004494;" cx="767.41" cy="1250" r="325"/>
    <polygon style="fill:#004494;" points="42.41,1250 482.41,1348.68 482.41,1151.32"/>
  </symbol>`;

  // Custom
  const custom = (pin, car) => `
  <!-- Symbols -->
  ${getPin(pin)}

  <!-- Pins container -->
  <g id="pins-container" ${config.mode === "dev" ? `style="opacity:0.5;"` : ""}></g>

  <!-- Car -->
  <image id="car-image" width="${car.width}" height="${car.height}" ${
    config.mode === "dev" ? `style="opacity:0.5;"` : ""
  } href="./svg/car-${getCar()}.svg" />`;

  /**
   * JSON
   */
  const json = [
    {
      year: "2010",
      month: "01",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "02",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "03",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "04",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "05",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "06",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "07",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "08",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "09",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "10",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "11",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2010",
      month: "12",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "01",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "02",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "03",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "04",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "05",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "06",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "07",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2011",
      month: "08",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2015",
      month: "05",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2018",
      month: "10",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2020",
      month: "01",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2020",
      month: "03",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
    {
      year: "2020",
      month: "06",
      text:
        "\u003Cp\u003Etest 2\u003C/p\u003E\n\u003Cp\u003Ewith \u003Cstrong\u003Ebold text\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003Eand paragraph tags\u003C/p\u003E\n",
    },
  ];

  /**
   * Global config
   */
  const config = {
    mode: "",
    counter: 1,
    counterDestiny: 1,
    movement: 0,
    currentRow: 0,
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    speed: 0.00075,
  };

  /**
   * DOM elements
   */
  // DOM container
  const container = document.querySelector("div.container");
  if (!container) return;

  // Road element
  let roadElement;

  // Road guide element
  let guide;

  // Array of pins
  let eventPins;

  // Car element
  let car;
  //car.setAttribute("transform", `rotate(180 ${car.getBBox().width * 0.5} ${car.getBBox().height * 0.5})`);
  //car.setAttribute("transform", `matrix(1, 0, 0, 1, ${car.getBBox().x + car.getBBox().width}, 0)`);
  //car.setAttribute("transform", `matrix(-1, 0, 0, 1, ${car.getBBox().x + car.getBBox().width}, 0)`);
  //car.setAttribute("transform", `matrix(-1, 0, 0, 1, ${car.getBBox().x + car.getBBox().width}, 0) translate(-128, 0)`);
  //car.setAttribute("transform", `matrix(1, 0, 0, 1, 0, 0) translate(128, 0)`);

  // Message element
  let message;

  // Log helper
  let logHelper;

  /**
   * Functions
   */
  function init() {
    if (config.resolutionMode === getResolutionMode()) return;

    // Set resolution
    config.resolutionMode = getResolutionMode();

    // Set road
    container.innerHTML = getRoad();

    // Get road element
    roadElement = container.querySelector("[id^='road-']");
    roadElement.style.position = "absolute";

    // Set car
    car = container.querySelector("image#car-image");

    // Set guide element for car animation reference
    guide = getGuideElement();

    // Set config
    config.cellPercent = getCellPercent();
    config.curvePercent = getCurvePercent();
    config.rowLength = getRowLength();

    // Set init position
    setCarMatrix();

    // Set pins along the road
    useSymbols();

    eventPins = Array.from(container.querySelectorAll("use.eventPin"));

    eventPins.forEach((ep) => {
      ep.addEventListener("click", setNewDestinyPin);
    });

    // Message
    initMessage();

    // Log helper
    logHelper = document.querySelector(".log-helper");

    if (config.mode !== "dev") {
      logHelper.style.display = "none";
    }

    // Init loop
    requestAnimationFrame(loop);
  }

  function loop() {
    if (config.counterDestiny !== 0) {
      // Car arrives selected pin
      if (config.counterDestiny >= config.counter - 0.00065 && config.counterDestiny <= config.counter + 0.00065) {
        // Final position
        config.counter = config.counterDestiny;

        // Set car configuration
        setCarMatrix();

        // Set message
        message.style.display = "block";

        // Reset values
        config.counterDestiny = 0;
        config.movement = 0;
      }
    }

    if (config.movement !== 0) {
      // Hide message if car moves
      if (message.style.display !== "none") {
        message.style.display = "none";
      }

      // Set counter
      config.counter = config.counter - config.speed * config.movement;
      config.counter = config.counter < 0 ? 0 : config.counter > 1 ? 1 : config.counter;

      // Check car orientation
      checkRowChange();

      // Set car configuration
      setCarMatrix();
    }

    /**
     * Logging
     */
    if (config.mode === "dev") {
      let output = "";
      Object.keys(config).forEach((k) => (output += `${k}: ${config[k]}<br/>`));
      logHelper.innerHTML = output;
    }

    // Looping!
    requestAnimationFrame(loop);
  }

  function onResize(e) {
    init();
  }

  function getResolutionMode() {
    const w = document.body.clientWidth;

    if (w < 600) {
      return "mobile";
    } else if (w < 1200) {
      return "tablet";
    }

    return "desktop";
  }

  function getRoad() {
    let road = "";

    switch (config.resolutionMode) {
      case "desktop":
        road = rawRoadDesktop("road-desktop", "guide-line");
        break;

      case "tablet":
        road = rawRoadTablet("road-tablet", "guide-line");
        break;

      case "mobile":
        road = rawRoadMobile("road-mobile", "guide-line");
        break;
    }

    return road;
  }

  function getCar() {
    if (config.resolutionMode === "mobile") {
      return config.resolutionMode;
    }

    return "desktop-tablet";
  }

  function getPin(pin) {
    if (config.resolutionMode === "mobile") {
      return rawPinMobile(pin);
    }

    return rawPinDesktopTablet(pin);
  }

  function getGuideElement() {
    const guide = container.querySelector("#guide-line_dashed");
    if (!guide) return;
    guide.setAttribute("transform", "matrix(1, 0, 0, 1, 0, 0)");
    return guide;
  }

  // Global config settings
  function getCellPercent() {
    switch (getResolutionMode()) {
      case "desktop":
        return getCellPercentDesktop();
      case "tablet":
        return getCellPercentTablet();
      case "mobile":
        return getCellPercentMobile();
    }
  }

  function getCellPercentDesktop() {
    const totalCurves = config.years.length - 1;
    return (1 - getCurvePercent() * totalCurves) / (config.years.length * config.months.length);
  }

  function getCellPercentTablet() {
    const totalCurves = config.years.length * 2 - 2;
    return (1 - getCurvePercent() * totalCurves) / ((config.years.length * 2 - 1) * config.months.length * 0.5);
  }

  function getCellPercentMobile() {
    const y1 = guide.getAttribute("y1");
    const y2 = guide.getAttribute("y2");
    const length = y1 - y2;
    return length / (config.years.length * 2 - 1);
  }

  function getCurvePercent() {
    switch (config.resolutionMode) {
      case "desktop":
        return getCurvePercentDesktop();
      case "tablet":
        return getCurvePercentTablet();
    }
  }

  function getCurvePercentDesktop() {
    return 0.00925;
  }

  function getCurvePercentTablet() {
    return 0.008;
  }

  function getRowLength() {
    switch (config.resolutionMode) {
      case "desktop":
        return getRowLengthDesktop();
      case "tablet":
        return getRowLengthTablet();
    }
  }

  function getRowLengthDesktop() {
    return config.cellPercent * config.months.length + config.curvePercent;
  }

  function getRowLengthTablet() {
    return config.cellPercent * config.months.length * 0.5 + config.curvePercent;
  }

  // Car settings
  function getCarScale() {
    let dir = 1;

    if (config.movement === -1) {
      if (config.currentRow % 2 === 0) {
        dir = -1;
      } else {
        dir = 1;
      }
    } else if (config.movement === 1) {
      if (config.currentRow % 2 === 0) {
        dir = 1;
      } else {
        dir = -1;
      }
    }

    return {
      x: dir,
      y: 1,
    };
  }

  function getCarPosition() {
    const pos = {
      x: 0,
      y: 0,
    };

    if (config.resolutionMode === "mobile") {
      // TODO
    } else {
      pos.x = guide.getPointAtLength(config.counter * guide.getTotalLength()).x - car.getBBox().width * 0.5;
      pos.y = guide.getPointAtLength(config.counter * guide.getTotalLength()).y - car.getBBox().height * 0.5;
    }

    return pos;
  }

  function setCarMatrix() {
    const scale = getCarScale();
    const pos = getCarPosition();
    const offset = scale.x === -1 ? car.getBBox().width : 0;

    car.setAttribute("transform", `matrix(${scale.x}, 0, 0, ${scale.y}, ${pos.x + offset}, ${pos.y})`);
  }

  // Pins settings
  function getPinPosition(item) {
    if (config.resolutionMode === "mobile") {
      return getPinPositionMobile(item);
    }

    return getPinPositionDesktopTablet(item);
  }

  function getPinPositionDesktopTablet(item) {
    const percent = getDestinyPercent(item.month, item.year);

    return {
      x: guide.getPointAtLength(percent * guide.getTotalLength()).x,
      y: guide.getPointAtLength(percent * guide.getTotalLength()).y,
    };
  }

  function getPinPositionMobile(item) {
    const texts = Array.from(container.querySelectorAll("g#road-mobile_texts text"));

    const t = texts.filter((t) => {
      return t.textContent === `${item.month}.${item.year}`;
    });

    return {
      x: t[0].getBoundingClientRect().x,
      y: t[0].getBoundingClientRect().y * 0.80125, // Wrong!
    };
  }

  function getPinsContainerOffset() {
    switch (config.resolutionMode) {
      case "desktop":
        return {
          x: -25,
          y: -100,
        };

      case "tablet":
        return {
          x: -120,
          y: -140,
        };

      case "mobile":
        return {
          x: -290,
          y: -20,
        };
    }
  }

  function useSymbols() {
    const pinsContainer = container.querySelector("g#pins-container");
    const offset = getPinsContainerOffset(); // Aprox

    pinsContainer.setAttribute("transform", `matrix(1, 0, 0, 1, ${offset.x}, ${offset.y})`);

    json.forEach((item) => {
      const pos = getPinPosition(item);

      pinsContainer.insertAdjacentHTML(
        "beforeend",
        `<use class="eventPin eventPin_y${item.year}-m${item.month}" href="#symbol-pin" x="${pos.x}" y="${pos.y}" transform="matrix(1, 0, 0, 1, 0, 0)" />`
      );
    });
  }

  // Get destiny point
  function getDestinyPercent(m, y) {
    switch (config.resolutionMode) {
      case "mobile":
        return getDestinyPercentMobile(m, y);

      case "tablet":
        return getDestinyPercentTablet(m, y);

      case "desktop":
        return getDestinyPercentDesktop(m, y);
    }
  }

  function getDestinyPercentDesktop(m, y) {
    const yi = config.years.indexOf(parseInt(y));
    const cellsCount = yi * config.months.length + parseInt(m);

    return 1 - cellsCount * getCellPercent() + getCellPercent() * 0.5 - getCurvePercent() * yi;
  }

  function getDestinyPercentTablet(m, y) {
    const mi = parseInt(m) > 6 ? parseInt(m) - config.months.length * 0.5 : parseInt(m);
    const yi = parseInt(m) > 6 ? config.years.indexOf(parseInt(y)) * 2 + 1 : config.years.indexOf(parseInt(y)) * 2;
    const cellsCount = yi * config.months.length * 0.5 + mi;

    return 1 - cellsCount * getCellPercent() + getCellPercent() * 0.5 - getCurvePercent() * yi;
  }

  function getDestinyPercentMobile() {}

  function setNewDestinyPin(e) {
    // Set destiny in %
    const data = e.currentTarget.classList[1].split("_")[1];
    const m = data.split("-")[1].substr(1);
    const y = data.split("-")[0].substr(1);
    config.counterDestiny = getDestinyPercent(m, y);

    // Required to set message position on display
    config.selectedPinMatrix = e.currentTarget.getCTM();

    // Set message
    setMessageContent(m, y);
    setMessagePosition();

    // Car direction move
    config.movement = config.counter < config.counterDestiny ? -1 : config.counter > config.counterDestiny ? 1 : 0;
  }

  // Check if car changes row
  function checkRowChange() {
    if (config.resolutionMode === "mobile") return;

    let newRow = 0;

    switch (config.resolutionMode) {
      case "desktop":
        newRow = checkRowChangeDesktop();
        break;

      case "tablet":
        newRow = checkRowChangeTablet();
        break;
    }

    if (config.currentRow !== newRow) {
      config.currentRow = newRow;
    }
  }

  function checkRowChangeDesktop() {
    const d = config.counter / config.rowLength;
    const years = config.years.length;
    return years - parseInt(d) - 1;
  }

  function checkRowChangeTablet() {
    const d = config.counter / config.rowLength;
    const years = config.years.length * 2 - 1;
    return years - parseInt(d) - 1;
  }

  // Message settings
  function initMessage() {
    // Adding message box
    const messageHTML = `
    <div class="message" style="
    display: none;
    height: auto;
    position:relative;
    width: 320px;">
      <div style="
      background-color: #F1F2F2;
      border: 4px dashed #004494;
      border-radius: 1rem;
      box-sizing: border-box;
      padding:1rem;
      position: absolute;
      transform: translate(-50%, -100%);
      width:100%;">
        <p style="
        font-family: 'sans-serif';">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet feugiat est. Maecenas eget urna a augue tincidunt efficitur. Integer non egestas massa. Integer non egestas massa. Integer non egestas massa. Integer non egestas massa.</p>
        <div style="
        background-color: #004494;
        height: 32px;
        width: 4px;
        position: absolute;
        transform: translate(-50%, 100%);
        bottom: 0;
        left: 50%;"></div>
      </div>
    </div>`;

    container.insertAdjacentHTML("beforeend", messageHTML);

    message = document.querySelector(".message");
    if (!message) return;

    config.roadSvgPoint = roadElement.createSVGPoint(); // Required to set message position when car arrives the clicked pin
    config.selectedPinMatrix = container.querySelector(".eventPin").getCTM(); // Required to set message position when car arrives the clicked pin
  }

  function setMessagePosition() {
    config.roadSvgPoint.x = guide.getPointAtLength(config.counterDestiny * guide.getTotalLength()).x;
    config.roadSvgPoint.y = guide.getPointAtLength(config.counterDestiny * guide.getTotalLength()).y;

    const position = config.roadSvgPoint.matrixTransform(config.selectedPinMatrix);
    const offset = getMessageOffset();

    message.style.transform = `translate(${position.x + offset.x}px, ${position.y + offset.y}px)`;
  }

  function getMessageOffset() {
    switch (config.resolutionMode) {
      case "desktop":
        return {
          x: container.querySelector(".eventPin").getBoundingClientRect().width * 0.5,
          y: 0,
        };

      case "tablet":
        return {
          x: container.querySelector(".eventPin").getBoundingClientRect().width * 2.85,
          y: container.querySelector(".eventPin").getBoundingClientRect().height * 0.6,
        };
    }
  }

  function setMessageContent(m, y) {
    // Get message content
    const info = json.filter((i) => {
      return i.month === m && i.year === y;
    });

    message.querySelector("p").innerHTML = info[0].text;
  }

  /**
   * Events
   */
  // Resize widget
  window.addEventListener("resize", onResize);

  // Keyboard events
  document.addEventListener("keydown", (e) => {
    if (config.mode !== "dev") return;

    switch (e.key) {
      case "ArrowLeft":
        config.movement = -1;
        break;

      case "ArrowRight":
        config.movement = 1;
        break;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (config.mode !== "dev") return;

    switch (e.key) {
      case "ArrowLeft":
        config.movement = 0;
        break;

      case "ArrowRight":
        config.movement = 0;
        break;
    }
  });

  /**
   * Init
   */
  init();
})();
