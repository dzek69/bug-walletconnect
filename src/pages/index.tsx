import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";

interface Props {}

const Index: React.FC<Props> = (props) => {
  const { open } = useWeb3Modal();

  return <>
    <button onClick={() => open()}>Open Connect Modal</button>
    <button onClick={() => open({ view: "Networks" })}>Open Network Modal</button>
  </>
}

export default Index
