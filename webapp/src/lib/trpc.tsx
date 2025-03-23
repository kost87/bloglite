import { createTRPCReact, httpBatchLink } from "@trpc/react-query"
import { TrpcRouter } from "@bloglite/backend/src/trpc"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


export const trpc = createTRPCReact<TrpcRouter>()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        }
    }
})

const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: "http://192.168.0.214:3000/trpc"
        })
    ]
})

export const TrpcProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}