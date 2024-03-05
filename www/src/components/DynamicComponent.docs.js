const base = {
    layout: 'centered',
    template: `
        <DynamicComponent name={name}></Button>
    `
};

export const Foo = {
    _celestialBase: base,
    name: 'Foo'
};