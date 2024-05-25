interface TypographyProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body-l" | "body" | "body-m" | "label-l" | "label" | "label-m" | "caption-l" | "caption" | "caption-m";
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TypographyProps>, {
    /** typography variants: "h1" | "h2" | "h3" | "h4" | "h5" | "body-l" | "body" | "body-m" | "label-l" | "label" | "label-m" | "caption-l" | "caption" | "caption-m" */
    variant: string;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TypographyProps>, {
    /** typography variants: "h1" | "h2" | "h3" | "h4" | "h5" | "body-l" | "body" | "body-m" | "label-l" | "label" | "label-m" | "caption-l" | "caption" | "caption-m" */
    variant: string;
}>>>, {
    variant: "body" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "label" | "body-l" | "body-m" | "label-l" | "label-m" | "caption-l" | "caption-m";
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
