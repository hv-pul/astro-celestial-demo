const base = {
    layout: 'centered',
    template: `
        <Button>{content}</Button>
    `
};

export const Default = {
    _celestialBase: base,
    content: 'A button!'
};

export const LongContent = {
    _celestialBase: base,
    content: 'A very very long button!!!'
};
