import { Meta, StoryObj } from "@storybook/vue3";
import Typography from "../src/components/typography/Typography.vue";

type Story = StoryObj<typeof Typography>;

const meta: Meta<typeof Typography> = {
  title: "Component/Typography",
  component: Typography,
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4", "h5"],
      control: { type: "radio" },
    },
  },
};

export const Default: Story = {
  args: {
    variant: "h1",
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args };
    },
    template: `<Typography :variant="args.variant"> Typography </Typography>`,
  }),
};

export default meta;
