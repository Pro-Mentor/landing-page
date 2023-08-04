import React, { Dispatch, DispatchWithoutAction, useState } from "react";
import { NavigationContextType } from "../@types/navigation";

// interface Store {
// 	state: NavigationContextType,
// 	dispatch: DispatchWithoutAction
// }

export const NavigationContext = React.createContext<NavigationContextType | null>(null);

interface Props {
	children: React.ReactNode;
}

const NavigationProvider: React.FC<Props> = ({ children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)
	const [about, setAbout] = useState<boolean>(false)
	const [features, setFeatures] = useState<boolean>(false)
	const [mentors, setMentors] = useState<boolean>(false)
	const [companies, setCompanies] = useState<boolean>(false)

	const navigateCurrentPath = () => {
		setCurrentPath(window.location.pathname)
	}

	const navigateAbout = () => {
		setAbout(!about)
	}

	const navigateFeatures = () => {
		setFeatures(!features)
	}

	const navigateCompanies = () => {
		setCompanies(!companies)
	}

	const navigateMentors = () => {
		setMentors(!mentors)
	}

	return (
		<NavigationContext.Provider value={{
			currentPath,
			navigateCurrentPath,
			about,
			navigateAbout,
			features,
			navigateFeatures,
			companies,
			navigateCompanies,
			mentors,
			navigateMentors
		}}>
			{children}
		</NavigationContext.Provider>
	)
}

export default NavigationProvider
