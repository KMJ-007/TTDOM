const { createBlock, mount, patch } = blockdom;
const { render,component } = ttdom;


function Hello(render) {
  const block = createBlock(`<p>Hello <block-text-0/></p>`);

  return (name) => block([name]);
}

function Main() {
  const main = createBlock(`
    <div>
      <block-child-0/>
    </div>`);

  return () => main([], [component(Hello, "from TTDOM")]);
}

render(Main, document.body);

