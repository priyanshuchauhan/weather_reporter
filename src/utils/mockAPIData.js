const apiMock = {
  cod: "200",
  message: 0.0084,
  cnt: 40,
  list: [
    {
      dt: 1561280400,
      main: {
        temp: 30.66,
        temp_min: 29.95,
        temp_max: 30.66,
        pressure: 1005.49,
        sea_level: 1005.49,
        grnd_level: 1002.72,
        humidity: 68,
        temp_kf: 0.71
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 35
      },
      wind: {
        speed: 3.09,
        deg: 161.295
      },
      rain: {
        "3h": 0.5
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-23 09:00:00"
    },
    {
      dt: 1561291200,
      main: {
        temp: 26.43,
        temp_min: 25.89,
        temp_max: 26.43,
        pressure: 1007.89,
        sea_level: 1007.89,
        grnd_level: 1005.36,
        humidity: 91,
        temp_kf: 0.53
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 58
      },
      wind: {
        speed: 2.01,
        deg: 142.816
      },
      rain: {
        "3h": 2.5
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-23 12:00:00"
    },
    {
      dt: 1561302000,
      main: {
        temp: 26.01,
        temp_min: 25.65,
        temp_max: 26.01,
        pressure: 1009.29,
        sea_level: 1009.29,
        grnd_level: 1006.79,
        humidity: 91,
        temp_kf: 0.36
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.79,
        deg: 134.706
      },
      rain: {
        "3h": 0.438
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-23 15:00:00"
    },
    {
      dt: 1561312800,
      main: {
        temp: 25.73,
        temp_min: 25.55,
        temp_max: 25.73,
        pressure: 1008.59,
        sea_level: 1008.59,
        grnd_level: 1005.89,
        humidity: 91,
        temp_kf: 0.18
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.31,
        deg: 125.482
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-23 18:00:00"
    },
    {
      dt: 1561323600,
      main: {
        temp: 25.45,
        temp_min: 25.45,
        temp_max: 25.45,
        pressure: 1007.6,
        sea_level: 1007.6,
        grnd_level: 1004.88,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.21,
        deg: 130.158
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-23 21:00:00"
    },
    {
      dt: 1561334400,
      main: {
        temp: 26.06,
        temp_min: 26.06,
        temp_max: 26.06,
        pressure: 1009.39,
        sea_level: 1009.39,
        grnd_level: 1006.69,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.44,
        deg: 145.189
      },
      rain: {
        "3h": 3.688
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-24 00:00:00"
    },
    {
      dt: 1561345200,
      main: {
        temp: 26.59,
        temp_min: 26.59,
        temp_max: 26.59,
        pressure: 1010.67,
        sea_level: 1010.67,
        grnd_level: 1007.91,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.86,
        deg: 151.626
      },
      rain: {
        "3h": 6.125
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-24 03:00:00"
    },
    {
      dt: 1561356000,
      main: {
        temp: 27.26,
        temp_min: 27.26,
        temp_max: 27.26,
        pressure: 1009.39,
        sea_level: 1009.39,
        grnd_level: 1006.85,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.56,
        deg: 137.501
      },
      rain: {
        "3h": 3.875
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-24 06:00:00"
    },
    {
      dt: 1561366800,
      main: {
        temp: 29.04,
        temp_min: 29.04,
        temp_max: 29.04,
        pressure: 1007.32,
        sea_level: 1007.32,
        grnd_level: 1004.66,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.02,
        deg: 149.746
      },
      rain: {
        "3h": 0.938
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-24 09:00:00"
    },
    {
      dt: 1561377600,
      main: {
        temp: 26.18,
        temp_min: 26.18,
        temp_max: 26.18,
        pressure: 1008.61,
        sea_level: 1008.61,
        grnd_level: 1005.88,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.13,
        deg: 143.662
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-24 12:00:00"
    },
    {
      dt: 1561388400,
      main: {
        temp: 25.91,
        temp_min: 25.91,
        temp_max: 25.91,
        pressure: 1010.37,
        sea_level: 1010.37,
        grnd_level: 1007.74,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.02,
        deg: 116.044
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-24 15:00:00"
    },
    {
      dt: 1561399200,
      main: {
        temp: 25.81,
        temp_min: 25.81,
        temp_max: 25.81,
        pressure: 1009.79,
        sea_level: 1009.79,
        grnd_level: 1007.14,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.96,
        deg: 134.752
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-24 18:00:00"
    },
    {
      dt: 1561410000,
      main: {
        temp: 25.23,
        temp_min: 25.23,
        temp_max: 25.23,
        pressure: 1008.13,
        sea_level: 1008.13,
        grnd_level: 1005.48,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 90
      },
      wind: {
        speed: 1.84,
        deg: 136.016
      },
      rain: {
        "3h": 1
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-24 21:00:00"
    },
    {
      dt: 1561420800,
      main: {
        temp: 26.01,
        temp_min: 26.01,
        temp_max: 26.01,
        pressure: 1009.98,
        sea_level: 1009.98,
        grnd_level: 1007.41,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 85
      },
      wind: {
        speed: 2,
        deg: 153.936
      },
      rain: {
        "3h": 1.25
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-25 00:00:00"
    },
    {
      dt: 1561431600,
      main: {
        temp: 28.31,
        temp_min: 28.31,
        temp_max: 28.31,
        pressure: 1010.66,
        sea_level: 1010.66,
        grnd_level: 1008.01,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 36
      },
      wind: {
        speed: 3.68,
        deg: 164.356
      },
      rain: {
        "3h": 1.188
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-25 03:00:00"
    },
    {
      dt: 1561442400,
      main: {
        temp: 29.63,
        temp_min: 29.63,
        temp_max: 29.63,
        pressure: 1009.32,
        sea_level: 1009.32,
        grnd_level: 1006.7,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 52
      },
      wind: {
        speed: 4.45,
        deg: 167.748
      },
      rain: {
        "3h": 1.687
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-25 06:00:00"
    },
    {
      dt: 1561453200,
      main: {
        temp: 29.75,
        temp_min: 29.75,
        temp_max: 29.75,
        pressure: 1007.14,
        sea_level: 1007.14,
        grnd_level: 1004.55,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 66
      },
      wind: {
        speed: 4.13,
        deg: 157.539
      },
      rain: {
        "3h": 0.438
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-25 09:00:00"
    },
    {
      dt: 1561464000,
      main: {
        temp: 26.82,
        temp_min: 26.82,
        temp_max: 26.82,
        pressure: 1008.69,
        sea_level: 1008.69,
        grnd_level: 1006.05,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 51
      },
      wind: {
        speed: 2.96,
        deg: 150.166
      },
      rain: {
        "3h": 0.25
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-25 12:00:00"
    },
    {
      dt: 1561474800,
      main: {
        temp: 26.32,
        temp_min: 26.32,
        temp_max: 26.32,
        pressure: 1010.39,
        sea_level: 1010.39,
        grnd_level: 1007.77,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 2.34,
        deg: 141.271
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-25 15:00:00"
    },
    {
      dt: 1561485600,
      main: {
        temp: 25.11,
        temp_min: 25.11,
        temp_max: 25.11,
        pressure: 1009.55,
        sea_level: 1009.55,
        grnd_level: 1007.21,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.67,
        deg: 129.709
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-25 18:00:00"
    },
    {
      dt: 1561496400,
      main: {
        temp: 24.95,
        temp_min: 24.95,
        temp_max: 24.95,
        pressure: 1008.16,
        sea_level: 1008.16,
        grnd_level: 1005.53,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.78,
        deg: 135.318
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-25 21:00:00"
    },
    {
      dt: 1561507200,
      main: {
        temp: 26.59,
        temp_min: 26.59,
        temp_max: 26.59,
        pressure: 1009.72,
        sea_level: 1009.72,
        grnd_level: 1006.88,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        }
      ],
      clouds: {
        all: 9
      },
      wind: {
        speed: 2.58,
        deg: 150.401
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-26 00:00:00"
    },
    {
      dt: 1561518000,
      main: {
        temp: 28.55,
        temp_min: 28.55,
        temp_max: 28.55,
        pressure: 1010.29,
        sea_level: 1010.29,
        grnd_level: 1007.58,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 4.11,
        deg: 170.682
      },
      rain: {
        "3h": 0.875
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-26 03:00:00"
    },
    {
      dt: 1561528800,
      main: {
        temp: 29.77,
        temp_min: 29.77,
        temp_max: 29.77,
        pressure: 1008.18,
        sea_level: 1008.18,
        grnd_level: 1005.52,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 47
      },
      wind: {
        speed: 4.37,
        deg: 172.709
      },
      rain: {
        "3h": 1.75
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-26 06:00:00"
    },
    {
      dt: 1561539600,
      main: {
        temp: 29.88,
        temp_min: 29.88,
        temp_max: 29.88,
        pressure: 1006.04,
        sea_level: 1006.04,
        grnd_level: 1003.61,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d"
        }
      ],
      clouds: {
        all: 12
      },
      wind: {
        speed: 3.49,
        deg: 158.351
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-26 09:00:00"
    },
    {
      dt: 1561550400,
      main: {
        temp: 26.45,
        temp_min: 26.45,
        temp_max: 26.45,
        pressure: 1007.85,
        sea_level: 1007.85,
        grnd_level: 1005.33,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 6
      },
      wind: {
        speed: 2.57,
        deg: 143.277
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-26 12:00:00"
    },
    {
      dt: 1561561200,
      main: {
        temp: 25.71,
        temp_min: 25.71,
        temp_max: 25.71,
        pressure: 1009.59,
        sea_level: 1009.59,
        grnd_level: 1006.94,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.8,
        deg: 118.882
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-26 15:00:00"
    },
    {
      dt: 1561572000,
      main: {
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        pressure: 1008.46,
        sea_level: 1008.46,
        grnd_level: 1005.88,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n"
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 1.32,
        deg: 95.037
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-26 18:00:00"
    },
    {
      dt: 1561582800,
      main: {
        temp: 24.86,
        temp_min: 24.86,
        temp_max: 24.86,
        pressure: 1007.4,
        sea_level: 1007.4,
        grnd_level: 1004.78,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: {
        all: 27
      },
      wind: {
        speed: 1.52,
        deg: 99.401
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-26 21:00:00"
    },
    {
      dt: 1561593600,
      main: {
        temp: 26.11,
        temp_min: 26.11,
        temp_max: 26.11,
        pressure: 1008.84,
        sea_level: 1008.84,
        grnd_level: 1006.06,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: {
        all: 30
      },
      wind: {
        speed: 1.55,
        deg: 138.686
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-27 00:00:00"
    },
    {
      dt: 1561604400,
      main: {
        temp: 29.37,
        temp_min: 29.37,
        temp_max: 29.37,
        pressure: 1009.61,
        sea_level: 1009.61,
        grnd_level: 1006.88,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 86
      },
      wind: {
        speed: 3.27,
        deg: 170.356
      },
      rain: {
        "3h": 0.75
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-27 03:00:00"
    },
    {
      dt: 1561615200,
      main: {
        temp: 29.61,
        temp_min: 29.61,
        temp_max: 29.61,
        pressure: 1007.94,
        sea_level: 1007.94,
        grnd_level: 1005.31,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 83
      },
      wind: {
        speed: 3.61,
        deg: 170.762
      },
      rain: {
        "3h": 1.812
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-27 06:00:00"
    },
    {
      dt: 1561626000,
      main: {
        temp: 29.69,
        temp_min: 29.69,
        temp_max: 29.69,
        pressure: 1005.99,
        sea_level: 1005.99,
        grnd_level: 1003.26,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.52,
        deg: 160.68
      },
      rain: {
        "3h": 0.438
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-27 09:00:00"
    },
    {
      dt: 1561636800,
      main: {
        temp: 26.27,
        temp_min: 26.27,
        temp_max: 26.27,
        pressure: 1007.37,
        sea_level: 1007.37,
        grnd_level: 1004.69,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.23,
        deg: 140.754
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-27 12:00:00"
    },
    {
      dt: 1561647600,
      main: {
        temp: 25.61,
        temp_min: 25.61,
        temp_max: 25.61,
        pressure: 1009.2,
        sea_level: 1009.2,
        grnd_level: 1006.48,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.67,
        deg: 104.161
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-27 15:00:00"
    },
    {
      dt: 1561658400,
      main: {
        temp: 24.9,
        temp_min: 24.9,
        temp_max: 24.9,
        pressure: 1008.29,
        sea_level: 1008.29,
        grnd_level: 1005.48,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.08,
        deg: 76.336
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-27 18:00:00"
    },
    {
      dt: 1561669200,
      main: {
        temp: 24.92,
        temp_min: 24.92,
        temp_max: 24.92,
        pressure: 1007.39,
        sea_level: 1007.39,
        grnd_level: 1004.73,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.93,
        deg: 125.215
      },
      rain: {
        "3h": 0.562
      },
      sys: {
        pod: "n"
      },
      dt_txt: "2019-06-27 21:00:00"
    },
    {
      dt: 1561680000,
      main: {
        temp: 26.25,
        temp_min: 26.25,
        temp_max: 26.25,
        pressure: 1009.19,
        sea_level: 1009.19,
        grnd_level: 1006.49,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.31,
        deg: 136.58
      },
      rain: {
        "3h": 1.188
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-28 00:00:00"
    },
    {
      dt: 1561690800,
      main: {
        temp: 29.6,
        temp_min: 29.6,
        temp_max: 29.6,
        pressure: 1009.95,
        sea_level: 1009.95,
        grnd_level: 1007.01,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 70
      },
      wind: {
        speed: 3.82,
        deg: 170.227
      },
      rain: {
        "3h": 0.438
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-28 03:00:00"
    },
    {
      dt: 1561701600,
      main: {
        temp: 30.45,
        temp_min: 30.45,
        temp_max: 30.45,
        pressure: 1007.66,
        sea_level: 1007.66,
        grnd_level: 1004.91,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 4.5,
        deg: 170.078
      },
      rain: {
        "3h": 2.124
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2019-06-28 06:00:00"
    }
  ],
  city: {
    id: 1880252,
    name: "Singapore",
    coord: {
      lat: 1.2905,
      lon: 103.852
    },
    country: "MY",
    population: 3547809,
    timezone: 28800
  }
};

export default apiMock;