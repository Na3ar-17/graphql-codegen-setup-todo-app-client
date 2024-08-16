import { ApolloClient, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		uri: 'http://localhost:4200/graphql',
		cache: new InMemoryCache(),
	})
})
