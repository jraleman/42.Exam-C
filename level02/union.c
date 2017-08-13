/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   union.c                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaleman <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/11/15 03:18:38 by jaleman           #+#    #+#             */
/*   Updated: 2016/11/15 03:18:39 by jaleman          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_union(char *str1, char *str2)
{
	int		i;
	char	str_union[4096];

	i = 0;
	while (str1[i])
	{
		if (!str_union[str1[i]])
		{
			str_union[str1[i]] = 1;
			write (1, &str1[i], 1);
		}
		i += 1;
	}
	i = 0;
	while (str2[i])
	{
		if (!str_union[str2[i]])
		{
			str_union[str2[i]] = 1;
			write (1, &str2[i], 1);
		}
		i += 1;
	}
}

int		main (int argc, char *argv[])
{
	if (argc == 3)
		ft_union(argv[1], argv[2]);
	write(1, "\n", 1);
	return (0);
}
