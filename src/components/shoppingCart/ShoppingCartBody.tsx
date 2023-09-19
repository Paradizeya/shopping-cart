import useCartStore from "../../stores/useCartStore";

type Props = {};

const ShoppingCartBody = ({}: Props) => {
  const { cartAmount } = useCartStore();
  console.log("render Cart Body");

  return (
    <>
      <div>Total Items amount: {cartAmount()}!</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos harum
        veritatis maxime. Quaerat laudantium amet incidunt quia tenetur? Magnam
        quod beatae excepturi doloremque corrupti velit? Numquam nesciunt
        laboriosam nulla nemo assumenda quisquam perferendis consectetur
        adipisci, quo nostrum beatae exercitationem facere inventore deleniti
        velit reiciendis, vel corporis blanditiis itaque magnam? Doloribus natus
        obcaecati dolorum animi impedit dignissimos nobis ipsum voluptatibus
        voluptatum quasi, sapiente similique tempore architecto officia unde
        deleniti ea consequatur accusantium exercitationem, saepe iure eum
        debitis placeat. Itaque, corrupti quidem quam perspiciatis quo esse
        assumenda illum quae, molestiae possimus velit! Odit accusamus tempora
        nesciunt corrupti suscipit! Magni, aut voluptates? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Cum eos harum veritatis maxime.
        Quaerat laudantium amet incidunt quia tenetur? Magnam quod beatae
        excepturi doloremque corrupti velit? Numquam nesciunt laboriosam nulla
        nemo assumenda quisquam perferendis consectetur adipisci, quo nostrum
        beatae exercitationem facere inventore deleniti velit reiciendis, vel
        corporis blanditiis itaque magnam? Doloribus natus obcaecati dolorum
        animi impedit dignissimos nobis ipsum voluptatibus voluptatum quasi,
        sapiente similique tempore architecto officia unde deleniti ea
        consequatur accusantium exercitationem, saepe iure eum debitis placeat.
        Itaque, corrupti quidem quam perspiciatis quo esse assumenda illum quae,
        molestiae possimus velit! Odit accusamus tempora nesciunt corrupti
        suscipit! Magni, aut voluptates?
      </div>
    </>
  );
};

export default ShoppingCartBody;
