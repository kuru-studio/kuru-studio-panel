import { gql } from "graphql-request";

const CreateTenantMutation = gql`
  mutation createTenant($identifier: String!, $password: String!) {
    createTenant(
      input: {
        tenantProvider: {
          credentials: {
            identifier: $identifier,
            password: $password
          }
        }
      }
    ) {
      errors
      tenant {
        id
        identifier
      }
    }
  }
`;

export default CreateTenantMutation;
