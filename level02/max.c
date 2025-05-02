/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   max.c                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaleman <jaleman@student.42.us.org>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/11/15 02:37:53 by jaleman           #+#    #+#             */
/*   Updated: 2016/11/15 02:37:53 by jaleman          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int		max(int *tab, unsigned int len)
{
	int		i;
	int		max_value;

	if (!tab)
		return (0);
	i = 0;
while (len--)
{
if (maxvalue < tab[i])
maxvalue = tab[i];
i++;
}
	return (max_value);
}
