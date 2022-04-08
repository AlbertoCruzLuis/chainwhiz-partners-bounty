import { useQuery } from "react-query"

export interface IPartner {
  name: string,
  description: string,
  banner: string,
  logo: string,
  socialNetworks: {
    name: string,
    url: string,
  }[],
}

export const usePartner = () => {
  return useQuery<IPartner[], Error>("partners", () => fetch("data/partners.json").then(res => res.json()))
}
