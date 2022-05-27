interface Props {
    height: string;
    width: string;
}
export const ImagePlaceHolder = ({ height, width }: Props) => {
    return (
        <div
            style={{
                background: "#bbb",
                width: "100%",
                height: height,
            }}
        ></div>
    );
};
