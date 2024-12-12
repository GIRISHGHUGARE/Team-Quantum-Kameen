import React from 'react'

const Success = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Thank You for Your Payment!</h1>
    <p>Your payment was secured by Buri Buri Zaimon.</p>
    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUTEBIVFRIXFxcWGBgXFxgYGhUXGBgXFxoaGBMZHSggGholHRcVJTEtJSkrLi4uFx81ODMtNygtLisBCgoKDg0OGhAQGi8lIB8tLS0rLS0tLS0vLy0tLS0tLS8rLS01Ly0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPMAzwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcBAgj/xABOEAACAgEBBQQGBQUMBwkAAAABAgADEQQFEiExQQYTUWEyQlJxgZEHImJyoRQjM7HBFkNTVIKSk6LC0dLwFSQlc7Kz4TQ1Y2SDo8Pi8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAtEQACAgEDAwIFAwUAAAAAAAAAAQIDERIhMQRBURMiFDIzQlIFYYFxwdHh8P/aAAwDAQACEQMRAD8A7jERAEREAp9e19RVdczE3UraytXgB61ABBrI9LAPFTxPQ9JadHq0uRbKmDIwyCP885WLk3dRqB4ur/zkUf2DIwezTObtMu8Cc208hZ4smeC2/g3I+IpVmJNM0ujVBSiXeJD2TtOrVVi2lt5D5YKkc1ZTxVgeBB4iTJcZhERAEREAREQBERAERPGYAZJwBxJ8IAJlT1Pal7HU6UKdOLa0axgfz284QioeyM+lyOOGRxkbaO0G1zFVyuiU4zyOqPX3Ujl9vj0549pYC1AcB3+mAA6fnV4AfCVSs3wjRCj2uUi9RES0ziIiAIiIAiIgCIiAVfay7urf7VVbfzWdf2zFM/aT6upoPt13Kf5JrYD/AIvlMEyW/Mel07zWiC9dlFp1GlGXOO9qzhdQo/BbQOTdeR4crdsfaleqqFtJypyCDwZGHNWXowPMSvzX27OYWm7T3Pp7HGLCgUi0DkWRgRvjo2M44TquzGzOLqNW8eS+yBrdtaan9NqKkPgzqD8icyoWbJWz9Pbfd5WWtu/0akL+EzaXZdFX6KipPuoo/HE7dy7IqXSS7s3D9tNEOV299xHb8Qs8HbHTnkt591Fv+GRAx8TPN4+M59Z+CxdIvJLPbTTDmLx76Lf8M+h2z0XrXbv3kdf1rIe8fExvnxMes/BHwi8m20vafR2ehqqT/wCoo/AmbSuwMMqQR4g5HzlPt06PwdEYeaqf1iQv9BacHeSoVt7VRas/NCJPrLwcvpH2ZfXYAEkgADJJ5ADqTKTtHaDbQOEJXQg9OB1RHn0oHzf3c8Op2WbF7uzUXvQSC1TvvB8HIVnI3yucZGcHrPnU7f0lVnc2amlLOA3CwBGeQx0iVuViJ1X0+l5mbIDHAcAOHukPaIy2nHjqqPwJP7JMBkPVDOp0K/8AmCx/k02mVQ+ZF93yMvURE2HliIiAIiIAiIgCIlc2ztp2dqNKQGXhbbjIqzx3VB4NZjx4DOTnlIbSWWdRi5PCI3bXW1q+mG+u+tpZhn0ajXYrM3srkpxM1mk29pbW3a9RUzeG8Mn3Z5yufSRsuz8hK6ZWP5xXu5s9i4bJZubfW3T/APk4uDjyP90paVm5qUnT7T9OmJwnYfbvWabA7zvax6ln1hjybmPn850fs/8ASDpdThbD3Nh6Ofqk+T/34lcoNF8LoyLfE8B+X657OC4REQBERAE+XcKCzEBQMkngAPEmR9pa+vT1tbc4RF6nqfADqZxjtn22t1pKV5r04PBRzfzc9fdyE6jFyK7LFBG+7Y/SQW3qdCcLyNvU/cHQec5q5LEliSTzJ4kkyZsjZVuqsFVCF2PPHJR4segnXOyX0fU6XFl+LrumfQQ+Q6nzMuzGCMqU7Xk23YTT216Ghb87+6Tg8wpJKg/D9c2Vtu5q9JY/CpDbvP6qs1ZRd49M5Izyk2eEZ4HkefnKVLDyapQzDSW0HPKeym6DXnRHDEtpCeOeJ05PUHrV4j1fdyuIM1RkpLKPNnBweGexETo4EREAREQDRdqdqNWEpoOL7shTz7tB6dmPLIA8yJqNHpVqQIg+qPE5JJ4lmY8WYnJJPMmfFVpuv1F55b5or8q6uB+dm+fgPCSpltll4PR6evTHPkTRbb7JaTV5NtQDn10+qx9+OB+M3sStPBe0nycm2z9Flq5OlsFg9lvqt8G5H44lI2nse/TNu30vWftKQD7m5GdI+lLtJqtNbXVQxrQpvFh6xzjGfKWXsRtGzWaJH1Shjkr9YDFgHrbp+I+EuUpJZZldcJS0rY5P2Z7ZanREKrl6c8a3JKj7vVfh8p2rYG1k1dCX1ggNnIPNWHAjzms2h2D0Nx3u53D/AOGSv4cpu9nbPr09S01Lu1oMAftJ6mcTknwW1QnHZvYkxETguEwa7VLTW9r+gis7e5Rk/qmefFtYYFWAKkEEHkQeBBgH5/7U9ordfdvuTuDhWg5IPIe0epmajsw9dB1WrDVUZAVTwe0nkFU8h5mdi2Z2S0enffqoUP0J+tj3Z5SD9JGyLNXoytI3nRxZu9WA5gecu9RcIyOl4cnuyi9mO340zLWNNXXpyRvbmd/7zOT9YzsNbhgCpyCAQfEHlPzrotg6m6wVpRZvE44qQB7yRwn6E2fQa6q0PEqiqfeBObEux3RKTzkkRESs0HjKCCCMg8CD1B5iTuyWqwr6ZjlqcbpPNqWzuHzxgqfujxkKYtNbuazTkeuLaj7sBx+Kn5yyp4kZ+pjmGfBcoiJqPOEREATxjwnsQCgdnWzpqz494fibbCfxM2U1uxV7vvtO3pUX2Lj7Dsbaz7ir/hNlMUuWetW8wQiIkHZG12hquXF9aOo4/XAIHnx5SFXa9oC6XdqoHAWboOQOlVfLH2jw8B1n1tVe+dNP6jAvb51qRhPczYB8gZswPDl+qTwccs1/+h0P6Sy6w+LWsPwXAE+js0j9FfbX5bwdfijgzLrtoVUAG61KweW8wGfcDznuh19V671NiWKDglWBwfA+BjLGmJgOour/AElYsX2qs5HvqJJ+RPukrS6pLV3q2DDODjofAjmD75mkHV7ODN3lbGq7219YeFi8nHv4joRIJ3XBOkDUbTAYpUpusHMJjCffsPBfdz8p8HSXWDdutATqKQUL+RcnKj3fOTdPQtahK1CIOSqMAf8AWTsN2Qt3Vtx3tPX5bllh/nb6j8J4LdUnppVavjVvVt/McsD/ADhNniJGRpMGj1a2rvIeGSDkYII5hgeII85nmr2kppcahPRyq3j2kP1RZj2kJHH2c55TaQwn2YiIg6ExUV7+s0w9nvbPkoX+1Msy9kaDY9mqPoN+ap860JLP/KfOPJQessqWZFHUSxDHktERE1HmiIiAIiIBVe1ugatxraVLFV3L0UZZ6gSQyjq6Ek46gkeEj6a9bEV62DIwyrA5BB8DLlKxtPsuwY26F1pcneethvU2k8yVGCjfaX4gyqyvVujTTfo2fBhia+/XWU/9r09lf20Btr9++oyB94CZ9Hr6rhmq1HH2WB/CZ3Frk2xnGXDIuh+tqdS3simse7d3/wBbmbOa3T/U1VqEY71UtXz3R3bD4YU/ypspDJjwcY21rWvvssc5JYgfZUEgKPASX2R1TV6yncON9gjD2lIPA+7n8JZNu9hS9jWaZ1AY5KPkbrHnusM8D4EcOPGSuy/Y78nsF17hrFB3FX0VJGCxY8WOM45YzM6rl6mo6ytOC3RE+LLVX0mVfeQP1zQD7mO+zdVmxnAJx44GZ9j8IMA4zbtzUWP33fOHJ3hhjhfABeWP1zrWxdWbtPTaww1laOR4FgCZprewujZy5WwAnJrFhCe7dxnHlmWRFAAAGABgAdAOk4ims5eSP4MesrDVup5FWB9xBEw7ItL0VMeZrQn5CfG3NR3dFhHpEbiDxd/qKPmfkDJGnqFNaqxChVC5JwOAx1nfYjuZ4mm1faOpQxqD37vPuhlV8d6z0Rjrx5TcaXs3ZqQG1doFJAIpoJ3XB4/nL/SceS7o987jW5Fdl0YEGqqzWv3VHDTA4uv6EdaqfaY+s3JR58rzTUEUKoAVQAAOQA4ACeaeha1CVqFRRgKowAPAATJNMYqKwefZY5vLERE6OBERAEREAREjbQ11dFbW3MFRRkk/gAOZJPAAcTAMmq1CVIz2MFRQSzMcAAdSZQNp6WvaNnePp0roBBU7gW+7HItYMNXX5ZyeuOUk3PZrXFuoBSlTvU0Hx6WXeL+C8l58TynSiyzsjbT0/wB0jQ29m0Rlu0zWLdXncD22OhB9JCrE4DDhkcuBmx0G00tJX0LR6VTYDr8PWXwI4GTZH1mhqux3tavjlkcR7m5j4SnOeTTpxwSd0+Eia7aNVIzbYq+AzlmPgqDiT5ASMdhUHo+PDvHx8szPotl00nNVSKx5sBlj/LPGNifcaunX2at2rR20yLzBG7qLB4qrD82h8eJ90nV9n9KvPT1uerWL3rH3vZkyXqtJXaALEVscsjiPc3MfCYF2YF9Gy4Dw7wn9eYyc6X33Ij7H7jL6NhTji1bEmhx90n82fNce4z62d2gqtwr/AJqw8lfgHx1qsOFsXzElLsyvOWBsPjYxfHuB4fhJN9K2KVsVWU8wwBHyMZJUWuDJiRdftCqgZtcL4LzZj4Kg4sfcJGOwNPyCEDwV3A+QMkaPZtNJzVWqt7WMt/PPGNifcay/ZturZLLbLNOlZLV1pgPkgrv2E5w2CcAcs+Mz1dm9MDvOjXN43u1uPcrndHym3iNTI0LueKoAwAAB0AwB8J9dn9V+TWLp24UWE9yelb8WNXkp4lfiPCeTDq9OLEKNyOOI5qQcqwPRgQCPdJhLSzm2tTjgucTU9ndpG5ClmO+rIV/tey4Hgw4+/I6TbTYnk8xpp4YiIggREQBET5scKCWIAAySeQA6kwDFrtYlFbW2sFRRlieglKL2aywX6hStanNFJ9Qfwlo62Ech6o8+M8t1Z2hYLm4aNGzQh/fmH7+46rn0B/K6jGwmeyzsjbRT90hMOqvFaF2zgeHM5OAB8TM0gbY4qi+1bWPgDvH9UpRrb2J8REEiJiCtvklh3e6AF3eIbJy2/wBQRjh0xMsAREQBERAERMD6cmxX33AVWXcBG42ccWHiMcPfAM8gbctZKWdTgoUY/dDDeHu3cyfI20qe8psT2kYfMGFyRLgkZnsg7E1Qt09TqQcoucHOGAwQfMHMnQE8oj22NS66isZZODqP3yo8WH3l9Ie4jrLjp7lsVXQgqwDAjqDxBlWnvZ3V/k9v5Mx/NWlmp+w/pPV7ubL72HQS+qfYydTV96LZERLzEIiIAkLbWzxqaLaCcCxGTPhkY5SbEAo+juOTTau5fXgMnQjkr1nrWRy8OIPESXNxt7Yw1Kgq3d3JxrsAyVPgR6yHqP1Su6XUsWNVyd3enpJnII9utvWQ/McjMtlendHo0XKSw+TLqdQlalrGCqMcT58APMkzX6q13t035mxKy7sHcBd7CHlWTvAceZA5cpN2hpu8rZeRxlT7LDip+BAnxZtMaptHaDzpuYgccOGrRhnyYOJEUsNk2SkpRXZkuIicF4iIgCIiAIieMOEA0+t2rbiyyipHqqyGZ2Km1wQClIA445ZbAzw8ZO0OvW3IAKuvp1uMOh8GH7RkHoZptnNZv06TUqtNdWGBzvfljgkrutjCgekwP1iSMcASc/b7UpTR3oO7qchaWHpA5yc+0mM5B4TL68lZokuf+RXBylLC79jexKv2Y7YJqcV3Yrv/AKlnmpPI+R/GWcnHOamsF04Sg9MlhogbA2J3mjS3TFa9ShtrYH0Lu6tesC0DqQo+sOIz15SRotV3gOVZHU7ro2Mo45gkcDzBBHAggyPsPtFTpdNqyXV2TUWlEBH5wuEdQDy4u5GenGNiWBq87+/YSWtOME2NxbKniB4eQEusxhMxUN6nHsbCazb7fmwigm9mHcKvpG1TlSPBRzJPADMmX6gghK137m9FB1+0x9VB1J+GTN5sPYgozZaRZqGH1nxgKPYrHqoPmeZnNcG3k7vtUVjubdM4GefX3z2Imo84REQBERAE1m3NjLqVHEpanGuwekjf2lPIg8CPgZs4gJ4OfaPSWX3PRrWFZrwe4ryBenS02Hi1ZPDdXkeDZmOnRdzr7UTAp7hLa0AAFbWOwsx4AmtT85c9t7IXUqvHctQ71Vg51t+1TyI5ETl2sv1mk1dm/wBy171q1m89jKB3lm4K+H1RujOOmZT6Mm8RNELfcnIu0Smr2n1fWrTn3O4/szMO1N/XTVZ/3x/wyH0tv4mv14eS2RKqvam7rpk+Fv8AeI/dVd/Fk/pf+kfDW/ix68PJaolU/dVd/Fk/pv8ApPR2pu/iyf0v/wBY+Gt/Fj14eS1RKp+6m7+L1f0rfsWfLdqNR0op/pH/AMEfC3fiPXh5LRqtMlqlLFDKeYP+eBlD7X9ltQT3tdlmoRRgI5y9ajovtj+t45mzHajUfwFH9I/+CP3T6n+BoH8uw/2JK6W5POk7r6uNc1OL3X7HNP8AP+fOWfYXaX66V69nt06jAHsnxtA42qByB5efSRtLRvr76kWuim6wvmxWchgiFsMhUZJOBnn75Wdp6C3TP3epQ1vzHVXHij8mH4+U4sju65bPH8nuQ6npf1CGmz2y8/4f9n/s7npTU9YNe41bDK7oBUjy6TRW7HYXirSjcsYd5W/q1KGAtV19es5XC9CeBEfR9st9No1FgIexmtK+wGxujHQ7oBPmTN1s/V1/6QVDYodaGAUnixdlbA8SAmcc+M8rpFjqdEXlbnz3UYSeHxwzfbJ2SmnB3ctY3F7G9Jz5+AHQDgJPiJ7x5zeRERAEREAREQBERAE5R22bO0LvKugfg5/bOrzkna9s7Q1Pl3I/9oH9su6f6iJRqoiJ6JIiIgCIiAIiIAiIgCu9qrKrkG81T7+77SkFXUee6xI8wJ0ClqNWiOoS1AQy5AO6w8j6LCc/mH8mXJIypPPdZl3vfukZ+M8v9Q/TfiZKcXiS2La7NOxfNubeSgFVw95HBBkhASB3lpXJStc5J8psNn7Gq7jcdhfvnvGt9tzx30I9HHDdweAAlR+j+lV2ggUAZpuz5/Wr5+Mvep2I1RL6IhM5LUt+isPiOtbea8PEGY6uiXTZinl+SZW6nuR6tfdpDi7N+m/hQPztPlag/SJ9peI6jrLDp71sUOjBlYZBByCPIzSaLaC2MUINdyjLVN6QHtDoyeY4TC2heljZoyFJ4vS3Cq0+I/g38xwPUGXp+ThwzuiyxNdsnbCajKjKWp6dT8HT3jqvgRkGbGdFQiIgCIiAIiIAnIO1A/2hq/vU/wDJWdfnJO13/eGq99P/AChL+n+oiUaqIiegSIiIAiIgCIiAIiIAiIgG67DD/aFX+6u/+OdWnJuxef8ASFH3Lv1JOszzuo+oyGQ9pbNrvAFg+spyjjg9beKMOIP6+s0tups0pxq/rU9NQo4DwFyD0PvD6vjuyzTxhngeIlDWSVJo0Gv2el262Sti8a7UOHTPst1U9Qcg9Z5ptuPQy164ABjupqFH5tz0V/4J/f8AVPQ9I1WyLKPr6LBXm2nY4U+PdP8AvbeR+qfLnGk1tepVlxxxu2VWDDLno6Hp58jOd0WbTLDEqyG7Rcag12l9arnZSOpqProPZPEccE8pY9HqktRbK2DIwypHIidJ5KmmjNERJIEREATkvbMY2jqPNKG/qsP2TrU5R24XG0bfOmg/I2CXUfURKNNERPRJERPmxwoJY4A5n/PWAfRPjylg7MdlX1eLLc16bmOj3e72E8+Z6Y5yX2T7Htdu36xCtfpJS3NvBrR0HUL8/CdEAmK6/O0SGyl9oewqEd5oQK7Bzrye7sx5eo3mOfXMoeTllZSrqd11bgyN4Ef5B6TuMrXa3sourxbWRXqVGA2ODr7Fg6jwPMfOcVXOGz4CZzSIZWVmrsUpahw6HmvgR4qehHAxN6aayiRERJBuOxCZ2jT5VXH/AIBOsTlvYBc68fZoc/znUfsnUp51/wBRkMRESkgTX7T2RXfhjlLV9C1Dh0+PUeRyD4TYRAKjrdq3aMH8posuHJLNOhbvD0VqxxrYn3r5jlNz2Y0j06WtbgBad53A5K9jtYyjyBcj4TaxISOnJsRESTkREQBOYfSIMa8cPS0yf1bbP7xOnznX0oJjUaVvaS5D8Nxh/allLxNEoqkRPi2wKMnyHDiSTwAA6knkJ6fBJ7Y4UZPu4DJJPIAdSZeuxvZAqV1OsX87zrqPEU+DN0a38F5Dxn12K7JGsjU6sDvf3qrmKQep8bT1PQcB1Ju0wXXatlwQ2IiJnIEREA0ParsymtQEHc1CA93aBxGfVYesh6j4jjOXW1WVu1VyblyekvMEdGU+sh6H4HjO3zRdrOzaa2sYO5emTXZjO6fZYesh6j5cZbVa4P8AYlM5ZE8ZXR2quXcuQ4dOeM8mU9UPQ/tns9FNNZRJaPozTOq1DezVUvxLO06RKF9FVZ/1xyOBtRAfuVqT+LS+zzLHmb/qQxEROCBERAEREAREQBERAE579KWsqJ09Sup1C2b5QcWWtkZSzAeiucc+eJf7QSpCnBwcHwPSct0/YDaO82/ZpAXYs9m9dY7sfWZSi5PLhvcOU7rwpZbJRpAJbfo62Clv+uXfWdXdKk5rVukqX+1YfHoDgdZL0P0cV89VqLbuWVXFSfJfrY97GW/Z+gr09a1UIqVryVRgCW3Xa1hBskxETOQIiIAiIgCIiAUf6U9BV3C6n0dSjrXWw9fvGANb+KEZPkQCJR8Ts+0NDXqK2qvRXrbmrDIOOI/GVLU/RvT+8ai+ry3hYvuw4JA9xl9NyhsyUyP9F+0qkrs07uEva6yxUbgXQ7uGQng3AcccR1l+nNtX9G97cF1dZXmC1JDo3RlZX9IdOU6NShVQCSxAAyeZwOZ85XPGcoM+4iJwQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAf//Z'
      alt="Thank You" 
      style={{ marginTop: '20px', maxWidth: '100%', height: 'auto' }} 
    />
  </div>
    </div>
  )
}

export default Success
