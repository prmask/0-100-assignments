const customElement = {
  type: "a",
  props: {
    href: "http://100xdevs.com",
    target: "_blank",
    children: ["For 100xdevs Click here..."],
  },
};

const generateHTML = (element) => {
  if (typeof element === "string") {
    return element;
  }

  const { type, props } = element;
  const children = props.children || [];

  const allChildren = children.join("");

  return `<${type} ${Object.keys(props)
    .map((key) => {
      if (key === "children") return null;
      return `${key}="${props[key]}"`;
    })
    .join(" ")}>${allChildren}</${type}>`;
};

const customRender = (element, path) => {
  const rootElement = document.getElementById(path);
  rootElement.innerHTML = generateHTML(element);
};

customRender(customElement, "root");
