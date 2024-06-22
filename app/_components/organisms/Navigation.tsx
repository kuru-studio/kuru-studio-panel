import Molecule from "@molecule";

const Navigation = ({ items, isExpanded }) => {
  return (
    <>
      {items.map((item, index) => (
        <Molecule.NavigationLink target={item.url} title={item.name} tooltip={!isExpanded} key={index}>
          {item.icon}
        </Molecule.NavigationLink>
      ))}
    </>
  );
};

export default Navigation;
