import Field from "./Field";

export default function Fields ( { reverse } )
{
    return (
        <>
            { reverse ? (
                <>
                    <Field key="lastName" label="Last name" />
                    <Field key="firstName" label="First name" />
                </>
            ) : (
                <>
                    <Field key="firstName" label="First name" />
                    <Field key="lastName" label="Last name" />
                </>
            ) }
        </>
    );
}