
interface ButtonProps {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "x-small" | "small" | "medium" | "large";
    disabled?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    /** button types: "primary" | "secondary" | "tertiary" */
    variant: string;
    /** button sizes: "x-small" | "small" | "medium" | "large" */
    size: string;
    /** button disabled state */
    disabled: boolean;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onClick: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    /** button types: "primary" | "secondary" | "tertiary" */
    variant: string;
    /** button sizes: "x-small" | "small" | "medium" | "large" */
    size: string;
    /** button disabled state */
    disabled: boolean;
}>>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    variant: "primary" | "secondary" | "tertiary";
    size: "small" | "x-small" | "medium" | "large";
    disabled: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
