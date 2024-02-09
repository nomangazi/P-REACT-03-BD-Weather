/* eslint-disable react/prop-types */
function ComposeProviders(props) {
    const { components = [], children } = props;

    return (
        <>
            {components.reduceRight(
                (acc, Comp) => (
                    <Comp>{acc}</Comp>
                ),
                children
            )}
        </>
    );
}

export default ComposeProviders;