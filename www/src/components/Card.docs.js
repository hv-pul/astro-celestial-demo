const base = {
    layout: 'fullscreen',
    template: `
        <Card href={href} title={title} body={body} />
    `
};

export const Default = {
    _celestialBase: base,
    href: '#',
    title: 'My Title?',
    body: 'My Body'
};
