import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	// schema: process.env.GQL_SERVER_API_URL,
	schema: 'http://localhost:4200/graphql',
	documents: ['src/**/*.tsx'],
	ignoreNoDocuments: true,
	generates: {
		'./src/gql/': {
			preset: 'client',
			// plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
		},
	},
}

export default config
