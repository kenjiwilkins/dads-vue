import { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    size: {
      options: ["x-small", "small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button :variant="args.variant" :size="args.size" :disabled="disabled"> Button </Button>`,
  }),
};

export default meta;
