import { Button, Icon, IconType } from "@surya-digital/leo-reactjs-material-ui";

export const MyButton = (props: {
  color: string;
  title: string;
  icon?: IconType;
  handleClick: () => void;
}) => {
  if (props.icon === undefined) {
    return (
      <Button
        name="increment"
        title={props.title}
        onClick={props.handleClick}
        variant="filled"
        size="large"
        iconPosition="left"
        isLoading={false}
        isDisabled={false}
        color="primary"
        style={{
          width: "100%",
          backgroundColor: props.color,
          borderRadius: "10px",
          margin: "auto",
        }}
      />
    );
  }
  return (
    <Button
      name="increment"
      title={props.title}
      onClick={props.handleClick}
      variant="filled"
      size="large"
      iconPosition="left"
      icon={<Icon type={props.icon} color="white" />}
      isLoading={false}
      isDisabled={false}
      color="primary"
      style={{
        width: "100%",
        backgroundColor: props.color,
        borderRadius: "10px",
      }}
    />
  );
};
