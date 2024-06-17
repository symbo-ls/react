import * as React from 'react'
import  { jsx }  from 'react/jsx-runtime'
import  { useRef }  from 'react'
import  { useContext }  from 'react'
import  { SymbolsProvider }  from '@symbo.ls/react'
import  { createSkeleton }  from 'smbls'
const orig = {
    extend: ["IconText", "FocusableComponent"],
    tag: "button",
    props: {
        fontSize: "A",
        type: "button",
        borderStyle: "none",
        display: "inline-flex",
        align: "center center",
        textDecoration: "none",
        lineHeight: "1",
        whiteSpace: "nowrap",
        padding: "Z B2",
        fontWeight: "500",
        fontFamily: "inherit",
        round: "C2",
    },
    attr: {
        type: ({ props }) => {
            return props.type;
        },
    },
};
import  { IconText }  from '@symbo.ls/react'
import  { FocusableComponent }  from '@symbo.ls/react'
export const Button = React.forwardRef((defProps, defRef) => {
    const defcontext = useContext(SymbolsProvider);
    const ref = defRef || useRef(null);
    const { domqlElementObject, ... props } = defProps;
    let dobj;
        try {
        dobj = domqlElementObject || createSkeleton({
    extend: [{
    props,
}, orig],
    context: defcontext,
});
    } catch(e) {
        console.log(e);
    }
    dobj.node = ref.current;
    return jsx(IconText, {
    innerRef: ref,
    domqlElementObject: dobj,
    ...FocusableComponent.props,
    ...FocusableComponent.attr,
    ...dobj.props,
    type: orig.attr.type(dobj, dobj.state, dobj.context),
});
}); 