export default function UserProfile(props) {

const { name } = props;

// simple welcome component for now

return (
<h2>
Welcome, {name}
</h2>
);
}