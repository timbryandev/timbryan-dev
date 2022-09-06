const asciiTim = `
████████╗██╗███╗   ███╗    ██████╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗           ██████╗ ███████╗██╗   ██╗
╚══██╔══╝██║████╗ ████║    ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║           ██╔══██╗██╔════╝██║   ██║
   ██║   ██║██╔████╔██║    ██████╔╝██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║           ██║  ██║█████╗  ██║   ██║
   ██║   ██║██║╚██╔╝██║    ██╔══██╗██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║           ██║  ██║██╔══╝  ╚██╗ ██╔╝
   ██║   ██║██║ ╚═╝ ██║    ██████╔╝██║  ██║   ██║   ██║  ██║██║ ╚████║    ██╗    ██████╔╝███████╗ ╚████╔╝
   ╚═╝   ╚═╝╚═╝     ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝    ╚═════╝ ╚══════╝  ╚═══╝
`;

const joke = `
<joke nsfw="false">
  A software tester:
  * Walks into a bar.
  * Runs into a bar.
  * Crawls into a bar.
  * Dances into a bar.
  * Flies into a bar.
  * Jumps into a bar.

  And orders:
  * a beer.
  * 2 beers.
  * 0 beers.
  * 99999999 beers.
  * a lizard in a beer glass.
  * -1 beer.
  * "qwertyuiop" beers.

  Testing complete.

  A real customer walks into the bar and asks where the bathroom is.
  The bar goes up in flames.
</joke>
`;

async function consoleBrand() {
  // eslint-disable-next-line no-console
  console.log(`
(If you can't see the content correctly, try increasing the width of your console to more than 106 characters)

Welcome to
${asciiTim}

I see you were brave enough to poke around my site with your dev tools - I like you!
As a reward, here is a joke:

${joke}
`);
}

export default consoleBrand;
