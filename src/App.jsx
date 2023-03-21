import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Main from "./components/Main"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
})

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                {/* set up routes for later :) */}
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
