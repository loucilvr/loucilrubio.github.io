export const Theme = (theme) =>
	theme === "light" ? lightThemeTokens : darkThemeTokens;

export const lightThemeTokens = {
	backgroundColor: "#faf9f5",
	backgroundHighlight: "#1c1f21",
	backgroundColorAccentWeakest: "#e8eaec",
	buttonLabel: "#151619",
	buttonNavBackground: "#626262",
	buttonNavHover: "#e9e7e1",
	buttonPrimaryBackground: "#242526",
	borderWeakest: "#D7DBDF",
	borderStrongest: "#242526",
	textWeakest: "#82858e",
	textWeak: "#494e5a",
	textStrong: "#3C3F49",
	textStrongest: "#333331",
};

export const darkThemeTokens = {
	backgroundColor: "#1c1f21",
	backgroundHighlight: "#ffffff",
	backgroundColorAccentWeakest: "#424650",
	buttonLabel: "#ECEDEE",
	buttonNavBackground: "#626262",
	buttonNavHover: "#3B4045",
	buttonPrimaryBackground: "#242526",
	borderWeakest: "#4E545B",
	borderStrongest: "#242526",
	textWeakest: "#606169",
	textWeak: "#bfc0c4",
	textStrong: "#CDCED1",
	textStrongest: "#e2e1dd",
};

export const MAX_WIDTH = 800;
