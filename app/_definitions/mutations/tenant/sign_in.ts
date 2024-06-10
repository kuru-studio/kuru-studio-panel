import { gql } from "graphql-request";

const SignInTenantMutation = gql`
  mutation signInTenant($identifier: String!, $password: String!) {
    signInTenant(
      input: {
        credentials: {
          identifier: $identifier,
          password: $password,
        }
      }
    ) {
      token
      tenant {
        id
        identifier
      }
    }
  }
`;

export default SignInTenantMutation;
