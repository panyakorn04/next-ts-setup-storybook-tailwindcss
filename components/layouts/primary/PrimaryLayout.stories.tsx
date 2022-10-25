import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';
export default {
    title: 'layouts/Primary',
    component: PrimaryLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof PrimaryLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
    <PrimaryLayout {...args} />
);

export const base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

base.args = {
    ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;