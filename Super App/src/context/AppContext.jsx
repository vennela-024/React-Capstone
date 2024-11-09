import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setuser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [selectedGenres, setSelectedGenres] = useState(
        JSON.parse(localStorage.getItem("selectedGenres") || "[]")
    );

    return (
        <AppContext.Provider
        value={{
            user,
            setuser,
            selectedGenres,
            setSelectedGenres,
        }}
        >
            {children}
        </AppContext.Provider>
    
    )
}